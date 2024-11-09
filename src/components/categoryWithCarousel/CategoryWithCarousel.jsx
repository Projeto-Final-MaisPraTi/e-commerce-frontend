import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./Carousel";
import Category from "./Categories";
import Banner from "./Banner"
import styled from "styled-components";

const Container = styled.div`
  margin: 2% 10% 50px 10%;
  width: 90vw;
  padding-left: 0;
  /* background: red; */

  @media (max-width: 767px) {
    margin: 0; /* Remove margens em telas menores */
    width: 100%; /* Faz o container ocupar toda a largura */
  }
`;

const Row = styled.div`
  display: flex;
  //background: green;
`

function CategoryWithCarousel() {
  return (
    <Container className="container">
      <Row>
        <Category />
        <Banner />
      </Row>
    </Container>
  );
}

export default CategoryWithCarousel;
