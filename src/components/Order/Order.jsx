import "./Order.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { formatPrice } from "../../utils/ProductUtils";
import styled from "styled-components";

const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Para indicar se os dados estão sendo carregados
  const [error, setError] = useState(null);

  const hasOrders = orders.length > 0; // Verifica se há pedidos

  const isOnProfilePage = location.pathname === "/account";
  const isOnOrderPage = location.pathname === "/orders";

  const handleProfileClick = () => {
    navigate("/account");
  };

  const handleOrderClick = () => {
    navigate("/orders");
  };

  const handleCancelOrder = async (orderId) => {
    try {
      // Atualiza a lista de pedidos localmente
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId && order.typeSaleStatus === "REALIZADO") {
          return { ...order, typeSaleStatus: "CANCELADO" };
        }
        return order;
      });
      setOrders(updatedOrders);

     // Envia a requisição para o backend para cancelar o pedido
      const token = localStorage.getItem("jwt");
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/sales/${orderId}/disable`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      alert("Pedido cancelado com sucesso!");
    } catch (error) {
      setError(error.message);
      alert("Erro ao cancelar pedido");
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("jwt");
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/sales/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setOrders(response.data);
        setLoading(false); // Dados carregados
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <Load>Carregando pedidos...</Load>;
  }

  return (
    <div className="order-container">
      <section className="order-info">
        <div className="order-card">
          <div className="order-method">
            <div className="order-p">
              <p
                className={`profile-option ${isProfileHovered ? "hovered" : ""} ${
                  isOnProfilePage ? "active" : ""
                }`}
                onClick={handleProfileClick}
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                Gerenciar Minha Conta
              </p>
            </div>
            <p
              className={`order-option ${isOrderHovered ? "hovered" : ""} ${
                isOnOrderPage ? "active" : ""
              }`}
              onClick={handleOrderClick}
              onMouseEnter={() => setIsOrderHovered(true)}
              onMouseLeave={() => setIsOrderHovered(false)}
            >
              Meus Pedidos
            </p>
            <br />
          </div>
        </div>
      </section>

      <section className="order-list">
        <h6 className="order-title">Histórico</h6>

        {hasOrders ? (
          <table className="order-table">
            <thead>
              <tr>
                <th>Número</th>
                <th>Data</th>
                <th>Total</th>
                <th>Status</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <a className="order-id">#{order.id}</a>
                  </td>
                  <td>{order.date}</td>
                  <td>{formatPrice(order.total)}</td>
                  <td>
                    <span
                      className={`status ${
                        order.typeSaleStatus === "REALIZADO" ? "realizado" : "cancelado"
                      }`}
                    >
                      {order.typeSaleStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="cancel-order-btn"
                      onClick={() => handleCancelOrder(order.id)}
                      disabled={order.typeSaleStatus === "CANCELADO"}
                      style={{
                        opacity: order.typeSaleStatus === "CANCELADO" ? "0.5" : "1",
                        cursor: order.typeSaleStatus === "CANCELADO" ? "not-allowed" : "pointer",
                      }}
                    >
                      Cancelar Pedido
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-orders">
            <p>
              Você ainda não tem pedidos para mostrar.{" "}
              <a href="/" className="link-to-home">
                Faça o seu primeiro pedido aqui.
              </a>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Order;
