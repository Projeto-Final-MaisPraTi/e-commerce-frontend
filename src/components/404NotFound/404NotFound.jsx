import "./404NotFound.css";
import { Link } from "react-router-dom";
import useLanguage from "../../utils/useLanguage";

const PageNotFound = () => {
  const { translations } = useLanguage();

  return (
    <div className="page-not-found">
      <h1>{translations.notFound.title}</h1>
      <p>{translations.notFound.description}</p>
      <Link to="/">
        <button className="back-home-button">
          {translations.notFound.backButton}
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
