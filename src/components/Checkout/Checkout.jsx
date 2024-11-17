import "./Checkout.css";
import { useState } from "react";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("money");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form className="checkout-form" action="url_para_enviar_dados_do_formulario" method="post">
      <div className="checkout-container">
        <div className="checkout-informations">
          <div className="checkout-box checkout-box1">
            <h1 className="checkout-heading">Informações Gerais</h1>
            <div>
              <input
                className="checkout-input"
                type="text"
                name="city"
                id="city"
                required
                placeholder="Cidade"
              />
            </div>
            <div>
              <input
                className="checkout-input"
                type="text"
                name="address"
                id="address"
                required
                placeholder="Rua"
              />
          </div>
          <div>
              <input className="checkout-input" type="number" name="number" id="number" placeholder="Número" required/>
          </div>
          <div className={paymentMethod === "card" && ("checkout-divDoubleInputs")}>
            <input className={paymentMethod === "card" ? ("checkout-input") : ("checkout-input2")} type="text" placeholder="UF" required/>
            <input className={paymentMethod === "card" ? ("checkout-input") : ("checkout-input2")} placeholder="CEP" required/>
          </div>
      
    </div>

          <div className="checkout-box checkout-box2">
            <h1>Informações de Pagamento</h1>
            <h5>Selecione a forma de pagamento</h5>
            <select className="checkout-payment" onChange={handlePaymentChange}>
              <option value="money" selected>
                Dinheiro
              </option>
              <option value="card">Cartão</option>
            </select>
            {paymentMethod === "card" && (
              <div className="checkout-cardInformations">
                <hr />
                <label className="checkout-numberCardLabel">
                  Número do Cartão:
                </label>
                <input type="number" id="numberCard" name="numberCard" required />
                <div>
                  <div>
                    <label >Validade:</label>
                    <div className="checkout-expiryDate"> 
                      <input type="text" id="checkout-expiryMonth" name="expiryMonth" placeholder="Mês" maxLength="2"/>
                      <p>/</p>
                      <input type="text" id="checkout-expiryYear" name="expiryYear" placeholder="Ano" maxLength="2"/>
                    </div>
                  </div>
                  <div>
                    <label >Código de Segurança:</label>
                    <input type="number" id="securityCode" name="securityCode" required />
                  </div>
                </div>
                    <label className="checkout-installmentsLabel">Parcelas:</label>
                    <select id="checkout-installments" name="installments"> 
                      <option value="1" selected>1</option> 
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
              Valor Total: R$ <span>0,00</span>
            </p>
            <p>
              Desconto: R$ <span>0,00</span>
            </p>
            <hr />
            <h3>
              Total à Pagar: R$ <span>0,00</span>
            </h3>
          </div>
        </div>
        <button className="checkout-button">Confirmar</button>
      </div>
    </form>
  );
}

export default Checkout;
