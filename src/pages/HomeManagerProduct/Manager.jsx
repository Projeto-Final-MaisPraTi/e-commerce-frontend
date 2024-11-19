import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import NavManage from "../../components/NavManageProduct/NavManage";
import { Outlet } from "react-router-dom";
import PageNotFound from "../404NotFound/PageNotFound";

const Container = styled.div`
  width: 95%;
  margin: auto;
  transition: 0.5s;
  @media screen and (max-width: 800px){
    width: 100%;
  }
`;

function ManagerProduct({admin}) {
  console.log(admin);
  if (!admin) {
    return <PageNotFound/>
  }
  return (
    <>
      <Header />
      <Container>
        <NavManage />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default ManagerProduct;
