import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-white text-black pt-5 pb-4"
      style={{
        // backgroundColor: '#000',
        position: "relative",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <div className="container-fluid text-center text-md-start">
        <div className="container-fluid text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto">
              <Link to="/">
                <img src={logo} alt="Logo" className="mb-4" />
              </Link>
              <p>
                Nossa missão é conectar pessoas às inovações tecnológicas, oferecendo produtos de
                qualidade. Em nossa loja, buscamos sempre atender às necessidades em constante
                evolução dos nossos clientes, inspirando-os a explorar novas possibilidades.
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">Empresa</h5>
              <p>Sobre Nós</p>
              <p>Carreiras</p>
              <p>Fale Conosco!</p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">Conta</h5>
              <p>
                <a href="account" className="text-black" style={{ textDecoration: "none" }}>
                  Minha Conta
                </a>
              </p>
              <p>
                <a href="login" className="text-black" style={{ textDecoration: "none" }}>
                  Entrar
                </a>
              </p>
              <p>
                <a href="cart" className="text-black" style={{ textDecoration: "none" }}>
                  Carrinho
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">Links Rápidos</h5>
              <p>
                <a href="#" className="text-black" style={{ textDecoration: "none" }}>
                  Politicas de Privacidade
                </a>
              </p>
              <p>
                <a href="#" className="text-black" style={{ textDecoration: "none" }}>
                  Termos de Uso
                </a>
              </p>
              <p>
                <a href="#" className="text-black" style={{ textDecoration: "none" }}>
                  FAQ
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-1 mb-3">
          <p>© Todos os direitos reservados +PraTi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
