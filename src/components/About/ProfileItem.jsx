import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ProfileItem = ({ image, name, title }) => {
  return (
    <div className="col-md-4 text-center my-3">
      <div className="card border-0 shadow-sm">
        <div className="img-container">
          <img
            src={image}
            alt={name}
            className="card-img-top img-fluid"
            style={{ height: '400px'}}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="mx-2">
              <FaTwitter />
            </a>
            <a href="#" className="mx-2">
              <FaInstagram />
            </a>
            <a href="#" className="mx-2">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
