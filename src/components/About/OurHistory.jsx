import ourHistoryImage from "../../assets/about_ourHistory.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OutHistory.css"; // Importe o CSS personalizado

const OurHistory = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="mb-5 custom-title">Nossa história</h2> {/* Aplicada a classe personalizada */}
          <p className="custom-text">
          Lançado em 2020, o Exclusive é o principal mercado de compras online da América do Norte com presença ativa no Canadá. Apoiado por uma diversas marcas, possuindo grande variedade de produtos e atendendo mais de 3 milhões de clientes em toda a região.
          </p>
          <p className="mt-3 custom-text">
          Buscamos oferecer aos consumidores o melhor da tecnologia, diversificando o estoque tanto quanto possível.
          </p>
        </div>
        <div className="col-md-6">
          <img src={ourHistoryImage} className="img-fluid" alt="Our History" />
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
