import "./404NotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 Não Encontrado</h1>
      <p>A página que você visitou não existe. Você pode voltar para a página inicial.</p>
      <Link to="/">
        <button className="back-home-button">Voltar para a página inicial</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
