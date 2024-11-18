import "./Order.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isPaymentHovered, setIsPaymentHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [showAlert, setShowAlert] = useState(false); // Controla o alerta de cancelamento

  const isOnProfilePage = location.pathname === "/account";
  const isOnPaymentPage = location.pathname === "/payment";
  const isOnOrderPage = location.pathname === "/order";

  const handleProfileClick = () => {
    navigate("/account");
  };
  const handlePaymentClick = () => {
    navigate("/payment");
  };
  const handleOrderClick = () => {
    navigate("/order");
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleCancelOrder = () => {
    if (window.confirm("Deseja cancelar esse pedido?")) {
      // Lógica para cancelar o pedido (exemplo: redirecionar, atualizar o status, etc.)
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
            <h6>
              <strong>Gerenciar minha conta</strong>
            </h6>
            <div className="order-p">
              <p
                className="profile-option"
                onClick={handleProfileClick}
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
                style={{
                  fontWeight: isProfileHovered ? "bold" : "normal",
                  color: isOnProfilePage ? "blue" : "black",
                  cursor: "pointer",
                }}
              >
                Meu perfil
              </p>
              <p
                className="payment-option"
                onClick={handlePaymentClick}
                onMouseEnter={() => setIsPaymentHovered(true)}
                onMouseLeave={() => setIsPaymentHovered(false)}
                style={{
                  fontWeight: isPaymentHovered ? "bold" : "normal",
                  color: isOnPaymentPage ? "blue" : "black",
                  cursor: "pointer",
                }}
              >
                Minhas opções de pagamento
              </p>
            </div>
            <p
              className="order-option"
              onClick={handleOrderClick}
              onMouseEnter={() => setIsOrderHovered(true)}
              onMouseLeave={() => setIsOrderHovered(false)}
              style={{
                fontWeight: isOrderHovered ? "bold" : "normal",
                color: isOnOrderPage ? "blue" : "black",
                cursor: "pointer",
              }}
            >
              Minhas compras
            </p>
            <br />
          </div>
        </div>
      </section>

      <section className="order-list">
        <h4 className="order-title">My Orders List</h4>
        <div className="order-controls">
          <select className="order-filter">
            <option>Default</option>
          </select>
          <input type="text" className="order-search" placeholder="Search..." />
        </div>
        <table className="order-table">
          <thead>
            <tr>
              <th>#Order No</th>
              <th>Purchased Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#" className="order-id">
                  #28VR5K59
                </a>
              </td>
              <td>September 12, 2024</td>
              <td>$3,650</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <button className="details-btn" onClick={toggleDetails}>
                  <span className="eye-icon"></span>
                </button>
              </td>
            </tr>

            {showDetails && (
              <tr className="order-details">
                <td colSpan="5">
                  <div className="order-details-container">
                    <div className="order-details-header">
                      <h5>Order Details</h5>
                      <button
                        className="cancel-order-btn"
                        onClick={() => {
                          const confirmCancel = window.confirm("Deseja cancelar esse pedido?");
                          if (confirmCancel) {
                            // Lógica de cancelamento do pedido
                          }
                        }}
                      >
                        Cancelar pedido
                      </button>
                    </div>
                    <table className="product-table">
                      <thead>
                        <tr>
                          <th>Produto</th>
                          <th>Quantidade</th>
                          <th>Valor</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="path/to/iphone.jpg" alt="iPhone 15" />
                            iPhone 15
                          </td>
                          <td>1</td>
                          <td>$1,200</td>
                          <td>$1,200</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="path/to/tv.jpg" alt="Samsung TV" />
                            Samsung 50" TV
                          </td>
                          <td>1</td>
                          <td>$1,000</td>
                          <td>$1,000</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="path/to/ps5.jpg" alt="PS5" />
                            PS5
                          </td>
                          <td>1</td>
                          <td>$1,450</td>
                          <td>$1,450</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="order-summary-container">
                      <div className="delivery-info">
                        <h5>Delivery Information</h5>
                        <p>John Doe</p>
                        <p>123 Main St, Apt 101, Cityville, Country</p>
                      </div>

                      <div className="order-summary">
                        <p>Subtotal: $3,650</p>
                        <p>Total Discount: $200</p>
                        <p>
                          <strong>Total Amount: $3,450</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Order;
