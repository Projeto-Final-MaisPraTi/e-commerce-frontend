import Header from "../../components/Header/Header";
import HomeManager from "./HomeManager";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import NavManage from "../../components/NavManageProduct/NavManage";

const Container = styled.div`
  display: flex;
  width: 77%;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  gap: 20px;
  transition: 0.5s;
`;

function ManagerProduct() {
  return (
    <>
      <Header />
      <NavManage />
      <Container>
        <HomeManager />
      </Container>
      <Footer />
    </>
  );
}

export default ManagerProduct;