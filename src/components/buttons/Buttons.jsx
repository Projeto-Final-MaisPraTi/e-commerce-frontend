import styled from "styled-components";

/*Tipos de botão:
1:red and white
2:black and white
*/
const BaseButton=styled.button`
 @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
 font-family: "Poppins", sans-serif;
 border-radius: 4px;
 &:hover{
    cursor: pointer;
 }
`;

function Buttons({ type, text, paddingX, paddingY }) {
  let FinalButton;
  switch (type) {
    
    case 1:
     FinalButton= styled(BaseButton)`
      background-color: #db4444;
      color: #fafafa;
      border: none;
      padding: ${paddingY}px ${paddingX}px;
      &:hover{
        background-color: #e07575;
      }
      `;
      break;
    case 2:
     FinalButton= styled(BaseButton)`
      color: #000000;
      border: 1px solid #00000080;
      padding: ${paddingY}px ${paddingX}px;
      &:hover{
        color: #7d8184;
      }
      `;
      
      
  }
  return <FinalButton>{text}</FinalButton>
}

//forma de chamar esses botoes: <Botao type={1} text={"add to cart"} paddingX={10} paddingY={5} />

export default Buttons;
