import styled from "styled-components";

/*Tipos de botão:
1:small red and white (tem um padding de cima e baixo menor em comparação ao grande)
2:big red and white
3:black and white
*/

const B1 = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Poppins", sans-serif;
  min-width: 192px;
  min-height: 44px;
  background-color: #db4444;
  color: #fafafa;
  border-radius: 4px;
  border: none;
  padding: 10px, 48px, 10px, 48px;

  &:hover {
    background-color: #e07575;
  }
`;
const B2 = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Poppins", sans-serif;
  min-width: 234px;
  min-height: 56px;
  background-color: #db4444;
  color: #fafafa;
  border-radius: 4px;
  border: none;
  padding: 16px, 48px, 16px, 48px;

  &:hover {
    background-color: #e07575;
  }
`;
const B3 = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Poppins", sans-serif;
  min-width: 234px;
  min-height: 56px;
  color: #000000;
  border: 1px solid #00000080;
  border-radius: 4px;
  padding: 16px, 48px, 16px, 48px;

  &:hover {
    color: #7d8184;
  }
`;

function Buttons({ type, text }) {
  switch (type) {
    case 1:
      return <B1>{text}</B1>;
      break;
    case 2:
      return <B2>{text}</B2>;
      break;
    case 3:
      return <B3>{text}</B3>;
  }
}

//forma de chamar esses botoes: <Botao type={1} text={"add to cart"} />

export default Buttons;
