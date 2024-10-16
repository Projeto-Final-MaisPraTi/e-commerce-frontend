import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  width: 77%;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
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
`;

const NavManage = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <ul className="nav-links">
        <li onClick={() => navigate("/manager")} >Manage Home</li>
        <li onClick={() => navigate("register")} >Register Product</li>
        <li onClick={() => navigate("update")} >Update Product</li>
      </ul>
    </Nav>
  );
};

export default NavManage;
