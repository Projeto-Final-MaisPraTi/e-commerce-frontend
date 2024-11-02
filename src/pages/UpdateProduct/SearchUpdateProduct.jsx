import Update from "./Update";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 77%;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  background-color: white;
  border-radius: 5px;
  gap: 20px;
  transition: 0.3s;
`;

function SearchUpdateProduct() {
  return (
    <>
      <Container>
        <Update />
      </Container>
    </>
  );
}

export default SearchUpdateProduct;
