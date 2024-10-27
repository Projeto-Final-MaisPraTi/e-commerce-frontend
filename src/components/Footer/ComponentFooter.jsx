const Footer = () => {
  return (
    <footer
      className="bg-dark text-white pt-5 pb-4"
      style={{
        backgroundColor: '#333',
        position: 'relative',
        width: '100%',
        marginTop: 'auto'
      }}
    >
      <div className="container-fluid text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3 mb-5">
            <h5 className="text-uppercase mb-4 font-weight-bold">Descrição</h5>
            <p>Exclusive is South Asias premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Empresa</h5>
            <p>Sobre Nós</p>
            <p>Carreiras</p>
            <p>Fale Conosco!</p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Account</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>My Account</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Login / Register</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Carrinho</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lista de Desejos</a></p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Links Rápidos</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Politicas de Privacidade</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Termos de Uso</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>FAQ</a></p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-3">
          <p>© Todos os direitos reservados +PraTi</p>
      </div>
    </footer>
  );
};

export default Footer;
