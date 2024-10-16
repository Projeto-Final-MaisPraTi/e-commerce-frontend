import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import NavManage from "../../components/NavManageProduct/NavManage";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  transition: 0.5s;
`;

function ManagerProduct() {
  return (
    <>
      <Header />
      <NavManage />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default ManagerProduct;
