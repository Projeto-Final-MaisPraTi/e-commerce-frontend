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
  const [existAddress, setExistAddress] = useState(false);
  const [formData, setFormData] = useState({
    addressId: "",
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

  const handleKeyUp = (event) => { 
    if (event.target.name === 'expiryMonth' && event.target.value.length === 2) { 
      document.getElementById('checkout-expiryYear').focus(); 
    } 
  };
  const handleKeyDown = (event) => { 
    if (event.key === 'Backspace' && event.target.name === 'expiryYear' && event.target.value === '') { 
      document.getElementById('checkout-expiryMonth').focus(); 
    } 
  };

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
            return total + ((item.preco) - ((item.preco) * (item.productDTO.discount /100)));
            // const itemDiscount = item.productDTO.discount || 0; // Desconto do produto (caso tenha)
            // const itemPrice = parseFloat(item.productDTO.price.replace("R$", "").replace(",", "."));
            // const itemPriceDiscount = parseFloat(
            //   item.productDTO.priceDiscount.replace("R$", "").replace(",", "."),
            // );

            // return total + itemPriceDiscount * item.quantidade; // Valor com desconto
          }, 0);

          setCartItems(cartData);
          setTotal(subtotal);

          // Caso não haja cupom, o desconto será 0
          setDiscount(0);

          // Calculando o total a pagar (total - desconto)
          setTotalToPay(subtotal - 0); // Se houver cupom, o desconto será subtraído aqui

          console.log("Dados retornados para o checkout: ", cartData);
        } else {
          console.warn("A resposta da API não é um array.", cartResponse.data);
          setCartItems([]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setCartItems([]); // Evita problemas mesmo se ocorrer um erro
      }
    };
    const getAddress = async () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/address/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }).then(resp => {
        setExistAddress(true);
        handleAddressChange("addressId", resp.data.id);
        handleAddressChange("city", resp.data.cidade);
        handleAddressChange("address", resp.data.endereco);
        handleAddressChange("number", resp.data.numero);
        handleAddressChange("uf", resp.data.uf);
        handleAddressChange("cep", resp.data.cep);
      }).catch (error => {
        if (error.response && error.response.status === 404) {
          console.log('Endereço não encontrado para este usuário');
        } else {
          console.error('Erro ao carregar o endereço:', error);
        }
      })
    }
    getAddress();
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

  const handleAddressChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
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

    const currentYear = new Date().getFullYear() % 100; // Ano atual (últimos 2 dígitos)
    const currentMonth = new Date().getMonth() + 1; // Mês atual

    if (
      paymentMethod === "card" &&
      (Number(formData.expiryYear) < currentYear ||
        (Number(formData.expiryYear) === currentYear &&
          Number(formData.expiryMonth) < currentMonth))
    ) {
      alert("A validade do cartão é inválida ou já expirou.");
      return;
    }

    try {
      if (existAddress) {
        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/address`,
          {
            id: formData.addressId,
            cidade: formData.city,
            endereco: formData.address,
            numero: formData.number,
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
      } else {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/address`,
          {
            cidade: formData.city,
            endereco: formData.address,
            numero: formData.number,
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
        ).then(resp => {handleAddressChange("addressId", resp.data.id)});
      }
      console.log(formData.addressId);
      const salesResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sales`,
        {
          total: total,
          discount, // Envia o desconto, que neste caso será 0 por enquanto
          addressId: formData.addressId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      const saleId = salesResponse.data.id;

      const paymentResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments`,
        {
          idSale: saleId,
          tipo: paymentMethod,
          valor: total,
          valorParcela:total,
          cardDetails:
            paymentMethod === "card"
              ? {
                  nomeDoDono: "Ronaldo",
                  numeroCartao: formData.numberCard,
                  validade: `${formData.expiryMonth}/${formData.expiryYear}`,
                  cvc: formData.securityCode,
                  parcelas: formData.installments,
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

      const salesItensResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sales-items`,
        {
          idSale: saleId,
          itemsCart: cartItems
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
      }
    } catch (error) {
      console.error("Erro ao finalizar o checkout:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
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
            <p>Valor Total: R$ {total.toFixed(2)}</p>
            <p>Desconto de Cupom: R$ {discount}</p>
            <hr />
            <h3>Total a Pagar: R$ {totalToPay.toFixed(2)}</h3>
          </div>
        </div>
        <button className="checkout-button">Finalizar pagamento</button>
      </div>
    </form>
  );
}

export default Checkout;
