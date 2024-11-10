import { useRef, useState } from "react";
import styled from "styled-components";
import Headphones from "../../assets/svgs/Headphones";
import Phones from "../../assets/svgs/Phones";
import SmartWatch from "../../assets/svgs/SmartWatch";
import Camera from "../../assets/svgs/Camera";
import Computers from "../../assets/svgs/Computers";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px 10%;
  margin: auto;
  margin-top: 20px;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    p {
      color: dodgerblue;
      font-weight: bold;
      margin: 0;
      font-size: 1.8em; /* Ajuste de fonte para telas grandes */
    }
  }

  .color {
    margin-right: 10px;
    height: 30px;
    width: 18px;
    background-color: dodgerblue;
    border-radius: 5px;

    @media (min-width: 2560px) {
      height: 40px;
      width: 25px;
    }
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  justify-content: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 200px;
  margin-top: 15px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1220px) {
    justify-content: flex-start;
  }

  @media (max-width: 450px) {
    height: 180px;
    gap: 10px;
  }

  @media (min-width: 2560px) {
    height: 250px; /* Ajuste de altura para 4K */
    gap: 20px; /* Maior espaçamento entre itens */
  }
`;

const Categories = styled.div`
  .apresentation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2em; /* Maior fonte em telas 4K */
    }
  }

  .slide {
    display: inline-block;
    height: 200px;
    width: 200px;
    border: solid 1px grey;
    text-align: center;
    border-radius: 3px;
    transition: background-color 0.3s;

    p {
      margin-top: 10px;
      font-size: 1.2em; /* Aumenta a fonte do texto */
    }
  }

  .slide + .slide {
    margin-left: 15px;
  }

  .slide:hover {
    background-color: dodgerblue;

    p {
      color: white;
    }

    cursor: pointer;
  }

  @media (max-width: 1300px) {
    .slide {
      height: 180px;
      width: 180px;
    }
  }

  @media (max-width: 768px) {
    .slide {
      height: 160px;
      width: 160px;
    }
  }

  @media (max-width: 480px) {
    .apresentation {
      flex-direction: column;
      align-items: center;
    }

    .slide {
      height: 140px;
      width: 140px;
    }
  }

  @media (min-width: 2560px) {
    .slide {
      height: 250px;
      width: 250px;
      p {
        font-size: 1.4em;
      }
    }
  }
`;

const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 100%;
`;

const ArrowsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ArrowButton = styled.button`
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;

  &:hover {
    background-color: #bbb;
  }

  @media (min-width: 2560px) {
    width: 60px;
    height: 60px; /* Aumenta os botões de navegação para 4K */
  }
`;

const Right = styled(FaChevronRight)`
  fill: grey;
`;

const Left = styled(FaChevronLeft)`
  fill: grey;
`;

function CardCategory() {
  const [hovered, setHover] = useState();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -180 : 180;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseHover = (componenteHover) => {
    setHover(componenteHover);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <Container>
      <div className="title">
        <span className="color"></span>
        <p>Categorias</p>
      </div>
      <Categories>
        <div className="apresentation">
          <h2>Navegue Por Categoria</h2>
          <ArrowsWrapper>
            <ArrowButton onClick={() => scroll("left")}>
              <Left />
            </ArrowButton>
            <ArrowButton onClick={() => scroll("right")}>
              <Right />
            </ArrowButton>
          </ArrowsWrapper>
        </div>
        <CategoriesContainer ref={carouselRef}>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Phones")}
            onMouseOver={() => handleMouseHover("Phones")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Phones color={hovered === "Phones" ? "white" : "black"} />
              <p>Telefones</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Computers")}
            onMouseOver={() => handleMouseHover("Computers")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Computers color={hovered === "Computers" ? "white" : "black"} />
              <p>Computadores</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Smartwatches")}
            onMouseOver={() => handleMouseHover("SmartWatch")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <SmartWatch color={hovered === "SmartWatch" ? "white" : "black"} />
              <p>Relógios Digitais</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Cameras")}
            onMouseOver={() => handleMouseHover("Camera")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Camera color={hovered === "Camera" ? "white" : "black"} />
              <p>Câmeras</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Headphones")}
            onMouseOver={() => handleMouseHover("Headphones")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Headphones color={hovered === "Headphones" ? "white" : "black"} />
              <p>Fones de Ouvido</p>
            </Itens>
          </div>
        </CategoriesContainer>
      </Categories>
    </Container>
  );
}

export default CardCategory;
