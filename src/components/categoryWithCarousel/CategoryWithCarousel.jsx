import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./Carousel";
import Category from "./Categories";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10% 50px 10%;
  width: 90vw;
  padding-left: 0;

  @media (max-width: 767px) {
    margin: 0; /* Remove margens em telas menores */
    width: 100%; /* Faz o container ocupar toda a largura */
  }
`;

function CategoryWithCarousel() {
  return (
    <Container className="container">
      <div className="row">
        <Category />
        <Carousel />
      </div>
    </Container>
  );
}

export default CategoryWithCarousel;
