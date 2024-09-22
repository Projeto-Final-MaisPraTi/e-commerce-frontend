import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Billing Details</h1>
      <form className="checkout-form" action="url_para_enviar_dados_do_formulario" method="post">
        <fieldset className="checkout-fieldset">
          <h2 className="checkout-subheading"></h2>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="name">
                First name: <span className="required">*</span>
              </label>
              <input className="checkout-input" type="text" name="name" id="name" required />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="company">
                Company Name: <span className="required">*</span>
              </label>
              <input className="checkout-input" type="text" name="company" id="company" required />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="endereco">
                Street Address: <span className="required">*</span>
              </label>
              <input
                className="checkout-input"
                type="text"
                name="endereco"
                id="endereco"
                required
              />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="optional">
                Apartment, floor, etc. (optional):
              </label>
              <input className="checkout-input" type="text" name="optional" id="optional" />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="city">
                Town/City: <span className="required">*</span>
              </label>
              <input className="checkout-input" type="text" name="city" id="city" required />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="number">
                Phone Number: <span className="required">*</span>
              </label>
              <input className="checkout-input" type="text" name="number" id="number" required />
            </div>
          </div>
          <div className="input-simples">
            <div>
              <label className="checkout-label" htmlFor="email">
                Email Address: <span className="required">*</span>
              </label>
              <input className="checkout-input" type="email" name="email" id="email" required />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Checkout;
