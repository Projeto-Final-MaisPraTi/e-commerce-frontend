import "./Checkout.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("money");
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0); // Valor total a pagar (final)
  const [isLoading, setIsLoading] = useState(false); // Novo estado para carregamento
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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/itemcart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (Array.isArray(cartResponse.data)) {
          const cartData = cartResponse.data;

          // Calculando o valor total com os descontos dos produtos
          const subtotal = cartData.reduce((total, item) => {
            const itemDiscount = item.productDTO.discount || 0; // Desconto do produto (caso tenha)
            const itemPriceDiscount = parseFloat(
              item.productDTO.priceDiscount.replace("R$", "").replace(",", "."),
            );

            return total + itemPriceDiscount * item.quantidade; // Valor com desconto
          }, 0);

          setCartItems(cartData);
          setTotal(subtotal);

          // Caso não haja cupom, o desconto será 0
          setDiscount(0);

          // Calculando o total a pagar (total - desconto)
          setTotalToPay(subtotal - 0); // Se houver cupom, o desconto será subtraído aqui
        } else {
          console.warn("A resposta da API não é um array.", cartResponse.data);
          setCartItems([]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setCartItems([]); // Evita problemas mesmo se ocorrer um erro
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

  const handleValidityChange = (event) => {
    const { name, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");

    if (name === "expiryMonth" && numericValue <= 12 && numericValue.length <= 2) {
      setFormData((prevFormData) => ({ ...prevFormData, expiryMonth: numericValue }));
    }

    if (name === "expiryYear" && numericValue.length <= 2) {
      setFormData((prevFormData) => ({ ...prevFormData, expiryYear: numericValue }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Ativa o carregamento

    const currentYear = new Date().getFullYear() % 100; // Ano atual (últimos 2 dígitos)
    const currentMonth = new Date().getMonth() + 1; // Mês atual

    if (
      paymentMethod === "card" &&
      (Number(formData.expiryYear) < currentYear ||
        (Number(formData.expiryYear) === currentYear &&
          Number(formData.expiryMonth) < currentMonth))
    ) {
      alert("A validade do cartão é inválida ou já expirou.");
      setIsLoading(false); // Desativa o carregamento
      return;
    }

    try {
      const salesResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sales`,
        {
          items: cartItems.map((item) => ({ id: item.id, quantity: item.quantity })),
          total,
          discount,
          address: {
            city: formData.city,
            address: formData.address,
            number: formData.number,
            uf: formData.uf,
            cep: formData.cep,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      const saleId = salesResponse.data.saleId;

      const paymentResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments`,
        {
          saleId,
          method: paymentMethod,
          cardDetails:
            paymentMethod === "card"
              ? {
                  numberCard: formData.numberCard,
                  expiryDate: `${formData.expiryMonth}/${formData.expiryYear}`,
                  securityCode: formData.securityCode,
                  installments: formData.installments,
                }
              : null,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (paymentResponse.data.status === "REALIZADO") {
        navigate("/purchase-success", { state: { orderData: salesResponse.data } });
      } else {
        alert("Erro no pagamento. Tente novamente.");
        setIsLoading(false); // Desativa o carregamento
      }
    } catch (error) {
      console.error("Erro ao finalizar o checkout:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
      setIsLoading(false); // Desativa o carregamento
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      {isLoading && ( // Overlay de carregamento
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Processando seu pagamento...</p>
        </div>
      )}
      <div className="checkout-container">
        {/* Informações gerais */}
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

          {/* Informações de pagamento */}
          <div className="checkout-box checkout-box2">
            <h1>Informações de Pagamento</h1>
            {/* Forma de pagamento */}
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
            <p>Valor Total: R$ {total.toFixed(3)}</p>
            <p>Desconto de Cupom: R$ {discount}</p>
            <hr />
            <h3>Total a Pagar: R$ {totalToPay.toFixed(3)}</h3>
          </div>
        </div>
        <button className="checkout-button">Finalizar pagamento</button>
      </div>
    </form>
  );
}

export default Checkout;
