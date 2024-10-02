import Header from "../../components/Header/Header";
import Register from "./Register";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import PreviewProduct from "./PreviewProduct";
import { RegisterProvider } from "./RegisterContext";
import NavManage from "../../components/NavManageProduct/NavManage";

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 30px;
  gap: 20px;

`

function RegisterProduct() {
  return (
    <>
      <Header />
        <NavManage />
        <Container>
          <RegisterProvider>
              <PreviewProduct />
              <Register />
          </RegisterProvider>
        </Container>
      <Footer />
    </>
  );
}

export default RegisterProduct;
