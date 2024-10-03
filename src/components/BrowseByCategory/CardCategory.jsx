import { useRef, useState } from "react";
import styled from "styled-components";
import Headphones from "../../assets/svgs/Headphones";
import Phones from "../../assets/svgs/Phones";
import SmartWatch from "../../assets/svgs/SmartWatch";
import Camera from "../../assets/svgs/Camera";
import Computers from "../../assets/svgs/Computers";
import useLanguage from "../../utils/useLanguage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
      color: #db4444;
      font-weight: bold;
      margin: 0;
    }
  }
  .color {
    margin-right: 10px;
    height: 30px;
    width: 18px;
    background-color: #db4444;
    border-radius: 5px;
  }
`;
const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  justify-content: center;
  -ms-overflow-style: none; /* Oculta a barra de rolagem no IE e Edge */
  scrollbar-width: none;
  height: 200px;
  margin-top: 15px;
  @media (max-width: 450px) {
    align-items: center;
  }
  @media (max-width: 1220px) {
    justify-content: flex-start;
  }
`;
const Categories = styled.div`
  .apresentation {
    display: flex;
    justify-content: space-between;
  }
  .slide {
    display: inline-block;
    height: 200px;
    width: 200px;
    border: solid 1px grey;
    text-align: center;
    border-radius: 3px;
    /* margin: auto; */
    p {
      margin-top: 10px;
    }
  }
  .slide + .slide {
    margin-left: 15px;
  }
  .slide:hover {
    background-color: #db4444;
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
  display: flex; /* Coloca as setas lado a lado */
  gap: 10px; /* Adiciona espaço entre as setas */
  margin-bottom: 10px;
  @media (min-width: 1400px) {
    display: none;
  }
`;
const ArrowButton = styled.button`
  background-color: #ccc; /* Fundo cinza */
  color: #000;
  border: none;
  border-radius: 50%; /* Torna o botão redondo */
  width: 40px; /* Ajusta o tamanho do botão */
  height: 40px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;

  &:hover {
    background-color: #bbb; /* Cor de fundo ao passar o mouse */
  }
`;
const Right = styled(FaChevronRight)`
  position: absolute;
  fill: grey;
`;
const Left = styled(FaChevronLeft)`
  position: absolute;
  fill: grey;
`;

function CardCategory() {
  const { translations } = useLanguage();
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
        <p>{translations.home.Categories.p}</p>
      </div>
      {/* <Right /> */}
      <Categories>
        <div className="apresentation">
          <h2>{translations.home.Categories.h2}</h2>
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
              <Phones color={hovered == "Phones" ? "white" : "black"} />
              <p>{translations.home.Categories.phone}</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Computers")}
            onMouseOver={() => handleMouseHover("Computers")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Computers color={hovered == "Computers" ? "white" : "black"} />
              <p>{translations.home.Categories.computer}</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Smartwatches")}
            onMouseOver={() => handleMouseHover("SmartWatch")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <SmartWatch color={hovered == "SmartWatch" ? "white" : "black"} />
              <p>{translations.home.Categories.watch}</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Cameras")}
            onMouseOver={() => handleMouseHover("Camera")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Camera color={hovered == "Camera" ? "white" : "black"} />
              <p>{translations.home.Categories.camera}</p>
            </Itens>
          </div>
          <div
            className="slide"
            onClick={() => handleCategoryClick("Headphones")}
            onMouseOver={() => handleMouseHover("Headphones")}
            onMouseLeave={handleMouseLeave}
          >
            <Itens>
              <Headphones color={hovered == "Headphones" ? "white" : "black"} />
              <p>{translations.home.Categories.headPhone}</p>
            </Itens>
          </div>
          {/* <div className="slide" onMouseOver={() => handleMouseHover("Gaming")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Gaming color={hovered == "Gaming" ? "white": "black"}/>
                    <p>{translations.home.Categories.gaming}</p>
                </Itens>
            </div> */}
        </CategoriesContainer>
      </Categories>
    </Container>
  );
}

export default CardCategory;
