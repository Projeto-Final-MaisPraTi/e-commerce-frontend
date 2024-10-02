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
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Exclusivo</h5>
            <p>Inscreva-se</p>
            <p>Ganhe 10% de desconto na primeira compra</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Insira seu e-mail" />
              <button className="btn btn-outline-light" type="submit">►</button>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Suporte</h5>
            <p>Inserir endereço AQUI!</p>
            <p>Inserir email de suporte AQUI!</p>
            <p>Inserir telefone de suporte aqui!</p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Account</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>My Account</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Login / Register</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Carrinho</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lista de Desejos</a></p>
          </div>

          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Link</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Politicas de Privacidade</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Termos de Uso</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>FAQ</a></p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="text-center">
          <p>© Todos os direitos reservados +PraTi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
