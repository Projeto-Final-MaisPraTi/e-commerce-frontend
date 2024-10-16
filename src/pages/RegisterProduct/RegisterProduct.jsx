import Register from "./Register";
import styled from "styled-components";
import { RegisterProvider } from "./RegisterContext";


const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 30px;
  gap: 20px;
  transition: 0.5s;
`;

function RegisterProduct() {
  return (
    <>
      <Container>
        <RegisterProvider>
          <Register />
        </RegisterProvider>
      </Container>
    </>
  );
}

export default RegisterProduct;
