import "./Checkout.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("money");
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    city: "",
    address: "",
    number: "",
    uf: "",
    cep: "",
    numberCard: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
    installments: "1",
  });
  const handleValidityChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.replace(/[^0-9]/g, "").slice(0, 2) });
  };

  const handleKeyUp = (event) => {
    if (event.target.name === "expiryMonth" && event.target.value.length === 2) {
      document.getElementById("checkout-expiryYear").focus();
    }
  };
  const handleKeyDown = (event) => {
    if (
      event.key === "Backspace" &&
      event.target.name === "expiryYear" &&
      event.target.value === ""
    ) {
      document.getElementById("checkout-expiryMonth").focus();
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/itemcart`);
        setCartItems(cartResponse.data.items);
        setTotal(cartResponse.data.total);
        setDiscount(cartResponse.data.discount);

        const addressResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/address`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (addressResponse.data) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            city: addressResponse.data.city || "",
            address: addressResponse.data.address || "",
            number: addressResponse.data.number || "",
            uf: addressResponse.data.uf || "",
            cep: addressResponse.data.cep || "",
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const checkoutData = {
      ...formData,
      paymentMethod,
      total,
      discount,
      cartItems,
    };

    try {
      // Atualize o endereço do usuário
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/address`,
        {
          city: formData.city,
          address: formData.address,
          number: formData.number,
          uf: formData.uf,
          cep: formData.cep,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      // Enviar os dados de checkout
      const paymentResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments`,
        checkoutData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      // Redirecionar para a página de sucesso
      navigate("/purchase-success", { state: { orderData: paymentResponse.data } });
    } catch (error) {
      console.error("Erro ao enviar dados do checkout:", error);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-container">
        <div className="checkout-informations">
          <div className="checkout-box checkout-box1">
            <h1 className="checkout-heading">Informações Gerais</h1>
            <div>
              <input
                className="checkout-input"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="Cidade"
              />
            </div>
            <div>
              <input
                className="checkout-input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Rua"
              />
            </div>
            <div>
              <input
                className="checkout-input"
                type="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                placeholder="Número"
              />
            </div>
            <div className={paymentMethod === "card" ? "checkout-divDoubleInputs" : ""}>
              <input
                className={paymentMethod === "card" ? "checkout-input" : "checkout-input2"}
                type="text"
                name="uf"
                value={formData.uf}
                onChange={handleInputChange}
                placeholder="UF"
                required
              />
              <input
                className={paymentMethod === "card" ? "checkout-input" : "checkout-input2"}
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                placeholder="CEP"
                required
              />
            </div>
          </div>

          <div className="checkout-box checkout-box2">
            <h1>Informações de Pagamento</h1>
            <h5>Selecione a forma de pagamento</h5>
            <select
              className="checkout-payment"
              onChange={handlePaymentChange}
              value={paymentMethod}
            >
              <option value="money">Dinheiro</option>
              <option value="card">Cartão</option>
            </select>
            {paymentMethod === "card" && (
              <div className="checkout-cardInformations">
                <hr />
                <label className="checkout-numberCardLabel">Número do Cartão:</label>
                <input
                  type="number"
                  id="numberCard"
                  name="numberCard"
                  value={formData.numberCard}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <div>
                    <label>Código de Segurança:</label>
                    <input
                      type="number"
                      id="securityCode"
                      name="securityCode"
                      value={formData.securityCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Validade:</label>
                    <div className="checkout-expiryDateBox">
                      <div className="checkout-expiryDateInput">
                        <input
                          type="text"
                          id="checkout-expiryMonth"
                          name="expiryMonth"
                          value={formData.expiryMonth}
                          onChange={handleValidityChange}
                          onKeyUp={handleKeyUp}
                          placeholder="MM"
                          maxLength="2"
                        />
                        <p>/</p>
                        <input
                          type="text"
                          id="checkout-expiryYear"
                          name="expiryYear"
                          value={formData.expiryYear}
                          onChange={handleValidityChange}
                          onKeyDown={handleKeyDown}
                          placeholder="AA"
                          maxLength="2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label className="checkout-installmentsLabel">Parcelas:</label>
                <select
                  id="checkout-installments"
                  name="installments"
                  value={formData.installments}
                  onChange={handleInputChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            )}
            <hr />
            <p>
              Valor Total: R$ <span>{total}</span>
            </p>
            <p>
              Desconto: R$ <span>{discount}</span>
            </p>
            <hr />
            <h3>
              Total à Pagar: R$ <span>{total - discount}</span>
            </h3>
          </div>
        </div>
        <button className="checkout-button">Confirmar</button>
      </div>
    </form>
  );
}

export default Checkout;
