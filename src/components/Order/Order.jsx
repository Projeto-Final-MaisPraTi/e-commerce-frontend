import "./Order.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: "#29VR5X89",
      date: "19/11/2024",
      total: "R$ 5.850,00",
      status: "Realizado",
    },
    {
      id: "#28VR5K59",
      date: "12/10/2024",
      total: "R$ 3.650,00",
      status: "Cancelado",
    },
  ]);

  const hasOrders = orders.length < 0; // Verifica se há pedidos

  const isOnProfilePage = location.pathname === "/account";
  const isOnOrderPage = location.pathname === "/orders";

  const handleProfileClick = () => {
    navigate("/account");
  };

  const handleOrderClick = () => {
    navigate("/orders");
  };

  const handleCancelOrder = (orderId) => {
    const confirmCancel = window.confirm("Deseja realmente cancelar esse pedido?");
    if (confirmCancel) {
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId && order.status === "Realizado") {
          return { ...order, status: "Cancelado" };
        }
        return order;
      });
      setOrders(updatedOrders);
      alert("Pedido cancelado!");
    }
  };

  useEffect(() => {
    document.title = "My Orders";
  }, []);

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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <a href="#" className="order-id">
                      {order.id}
                    </a>
                  </td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span
                      className={`status ${
                        order.status === "Realizado" ? "completed" : "cancelled"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="cancel-order-btn"
                      onClick={() => handleCancelOrder(order.id)}
                      disabled={order.status === "Cancelado"}
                      style={{
                        opacity: order.status === "Cancelado" ? "0.5" : "1",
                        cursor: order.status === "Cancelado" ? "not-allowed" : "pointer",
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
            <p>Você ainda não tem pedidos para mostrar.{" "}
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
