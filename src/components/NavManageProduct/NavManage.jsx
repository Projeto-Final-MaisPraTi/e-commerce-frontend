import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  width: 77%;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  background-color: white;
  border-radius: 5px;
  .nav-links {
    display: flex;
    list-style-type: none;
    margin-bottom: 0;
    gap: 30px;
    li {
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        border-radius: 5px;
        box-shadow: 0 0 3px rgba(3, 0, 0, 0.2);
        transition: 0.5s;
      }
    }
  }
  @media screen and (max-width: 500px){
    width: 95%;
    .nav-links {
      flex-direction: column;
      gap: 0;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;
    }
  }
`;

const NavManage = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <ul className="nav-links">
        <li onClick={() => navigate("/manager")} >Início | Visão Geral</li>
        <li onClick={() => navigate("register")} >Registrar Produto</li>
        <li onClick={() => navigate("update")} >Atualizar Produto</li>
      </ul>
    </Nav>
  );
};

export default NavManage;
