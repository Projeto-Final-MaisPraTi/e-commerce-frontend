import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LinkHomePage = styled.span`
  color: dodgerblue;
  &:hover {
    cursor: pointer;
  }
`;
const Div = styled.div`
  text-align: center;
  width: 80%;
  margin: 150px 10%;
`;

export function NoItensCart() {
  const navigate = useNavigate();
  const LinkClick = () => {
    navigate("/");
  };

  return (
    <Div>
      <h1>Parece que não há produtos no seu carrinho.</h1>
      <h1>
        Clique <LinkHomePage onClick={() => LinkClick()}>aqui</LinkHomePage> para ver oque temos a
        oferecer.
      </h1>
    </Div>
  );
}
