import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkList = styled.div`
  margin-bottom: 0;
  padding-top: 40px;
  padding-left: 0;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  a {
    color: #000;
    text-decoration: none;
    margin-top: 10px;
    transition: color 0.7s ease;

    &:hover {
      text-decoration: underline;
      color: dodgerblue;
    }
  }

  @media (max-width: 767px) {
    align-items: center; /* Centraliza os links em telas pequenas */
  }
`;

function Category() {
  return (
    <LinkList className="col-12 col-md-2">
      <Link to="/category/Phones">Telefones</Link>
      <Link to="/category/Computers">Computadores</Link>
      <Link to="/category/Smartwatches">Relógios Digitais</Link>
      <Link to="/category/Cameras">Câmeras</Link>
      <Link to="/category/Headphones">Fones de Ouvido</Link>
    </LinkList>
  );
}

export default Category;
