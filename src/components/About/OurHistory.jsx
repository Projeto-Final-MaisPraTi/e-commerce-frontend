import ourHistoryImage from "../../assets/about_ourHistory.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OutHistory.css"; // Importe o CSS personalizado

const OurHistory = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="mb-5 custom-title">Our Story</h2> {/* Aplicada a classe personalizada */}
          <p className="custom-text">
            Launched in 2015, Exclusive is South Asias premier online shopping marketplace with an
            active presence in Bangladesh. Supported by a wide range of tailored marketing, data,
            and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="mt-3 custom-text">
            Exclusive has more than 1 Million products to offer, growing at a very fast rate.
            Exclusive offers a diverse assortment in categories ranging from consumer goods.
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
