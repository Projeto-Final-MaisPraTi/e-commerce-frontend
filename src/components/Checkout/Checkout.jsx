import "./Checkout.css";
import { useState } from 'react';


function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('money');

  const handlePaymentChange = (event) => { setPaymentMethod(event.target.value); };

  return (
    <form className="checkout-form" action="url_para_enviar_dados_do_formulario" method="post">
    <div className="checkout-container">
      <div className="checkout-informations">
    <div className="checkout-box checkout-box1">
      <h1 className="checkout-heading">Informações Gerais</h1>
          <div>
              <input className="checkout-input checkout-validation" type="text" name="city" id="city" required placeholder="Cidade"/>
          </div>
          <div>
              <input
                className="checkout-input checkout-validation"
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
          <div>
            <input className="checkout-input2" type="text" placeholder="UF" required/>
            <input className="checkout-input2" type="number" placeholder="CEP" required/>
          </div>
      
    </div>

    <div className="checkout-box checkout-box2">
      <h1>Informações de Pagamento</h1>
      <h5>Selecione a forma de pagamento</h5>
      <select className="checkout-payment" onChange={handlePaymentChange}>
        <option value="money" selected>Dinheiro</option>
        <option value="card">Cartão</option>
      </select>
      {paymentMethod === 'card' && ( 
        <div className="checkout-cardInformations"> 
          <hr />
          <label for="name" className="checkout-numberCardLabel">Número do Cartão:</label> <input type="number" id="numberCard" name="numberCard" required />
          <div>
          <div><label for="name">Validade:</label> <input type="date" id="validity" name="validity" required /></div>
          <div><label for="name">Código de Segurança:</label> <input type="number" id="securityCode" name="securityCode" required /></div>
          </div>
          </div> 
        )}
        <hr />
        <p>Valor Total: R$ <span>0,00</span></p>
        <p>Desconto: R$ <span>0,00</span></p>
        <hr />
       <h3>Total à Pagar: R$ <span>0,00</span></h3>


    </div>
    </div>
    <button className="checkout-button">Confirmar</button>
    </div>
    </form>
  );
}

export default Checkout;
