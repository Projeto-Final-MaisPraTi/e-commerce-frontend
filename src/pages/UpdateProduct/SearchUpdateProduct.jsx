import Header from "../../components/Header/Header";
import Update from "./Update";
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
  transition: 0.3s;
`;

function SearchUpdateProduct() {
  return (
    <>
      <Header />
      <NavManage />
      <Container>
        <Update />
      </Container>
      <Footer />
    </>
  );
}

export default SearchUpdateProduct;
