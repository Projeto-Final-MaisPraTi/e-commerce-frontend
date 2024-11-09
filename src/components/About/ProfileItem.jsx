import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Certifique-se de que o Bootstrap está importado

const ProfileItem = ({ image, name, title }) => {
  return (
    <div className="col-md-4 text-center my-2">
      <div className="card border-0 shadow-sm">
        <div className="img-container">
          <img
            src={image}
            alt={name}
            className="card-img-top img-fluid"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          {/* Opção 1: Usando uma tag de cabeçalho maior */}
          <h4 className="card-title mb-1 d-flex justify-content-center">{name}</h4>

          {/* Opção 2: Usando classes de tamanho de fonte do Bootstrap */}
          {/* <h5 className="card-title mb-3 fs-3">{name}</h5> */}

          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-center mt-2">
            <a href="#" className="mx-2 text-dark" aria-label="Twitter">
              <FaTwitter size={24} /> {/* Aumentou o tamanho para 24px */}
            </a>
            <a href="#" className="mx-2 text-dark" aria-label="Instagram">
              <FaInstagram size={24} /> {/* Aumentou o tamanho para 24px */}
            </a>
            <a href="#" className="mx-2 text-dark" aria-label="LinkedIn">
              <FaLinkedin size={24} /> {/* Aumentou o tamanho para 24px */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
