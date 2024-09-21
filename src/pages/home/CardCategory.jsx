import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Gaming from '../../assets/svgs/Gaming';
import Headphones from '../../assets/svgs/Headphones';
import Phones from '../../assets/svgs/Phones';
import SmartWatch from '../../assets/svgs/SmartWatch';
import Camera from '../../assets/svgs/Camera';
import Computers from '../../assets/svgs/Computers';
import useLanguage from '../../utils/useLanguage';


const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    .title {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        p {
            color: #DB4444;
            font-weight: bold;
            margin: 0;
        }
    }
    .color {
        margin-right: 10px;
        height: 30px;
        width: 18px;
        background-color: #DB4444;
        border-radius: 5px;
    }
`

const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  /* Oculta a barra de rolagem no IE e Edge */
    scrollbar-width: none;
    height: 250px;
    @media (max-width: 450px){
        align-items: center;
    }
`

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
        p{
            margin-top: 10px;
        }
    }
    .slide + .slide {
        margin-left: 15px;
    }
    .slide:hover{
        background-color: #DB4444;
        p {
            color: white;
        }
        cursor: pointer;
    }
    @media (max-width: 1300px){
        .slide {
            height: 180px;
            width: 180px;
        }
    }
`

const Itens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    height: 100%;
`

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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #bbb; /* Cor de fundo ao passar o mouse */
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #000; /* Cor preta para a seta */
  }
`;

function CardCategory() {

    const { translations } = useLanguage();
    const [hovered, setHover] = useState();

    const carouselRef = useRef(null);

    const scroll = (direction) => {
      if (carouselRef.current) {
        const scrollAmount = direction === "left" ? -200 : 200;
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };  

    const handleMouseHover = (componenteHover) => {
        setHover(componenteHover);
    }

    const handleMouseLeave = () => {
        setHover(null);
    }

  return (
    <Container>
        <div className='title'>
            <span className='color'></span>
            <p>{translations.home.Categories.p}</p>
        </div>
      <Categories>
        <div className='apresentation'>
            <h2>{translations.home.Categories.h2}</h2>
            <ArrowsWrapper>
                <ArrowButton onClick={() => scroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M7 12l5-5m0 10l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </ArrowButton>
                <ArrowButton onClick={() => scroll("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M17 12l-5-5m0 10l5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </ArrowButton>
            </ArrowsWrapper>
        </div>
        <CategoriesContainer ref={carouselRef}>
            <div className="slide" onMouseOver={() => handleMouseHover("Phones")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Phones color={hovered == "Phones" ? "white": "black"}/>
                    <p>{translations.home.Categories.phone}</p>
                </Itens>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Computers")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Computers color={hovered == "Computers" ? "white": "black"}/>
                    <p>{translations.home.Categories.computer}</p>
                </Itens>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("SmartWatch")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <SmartWatch color={hovered == "SmartWatch" ? "white": "black"}/>
                    <p>{translations.home.Categories.watch}</p>
                </Itens>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Camera")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Camera color={hovered == "Camera" ? "white": "black"}/>
                    <p>{translations.home.Categories.camera}</p>
                </Itens>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Headphones")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Headphones color={hovered == "Headphones" ? "white": "black"}/>
                    <p>{translations.home.Categories.headPhone}</p>
                </Itens>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Gaming")} onMouseLeave={handleMouseLeave}>
                <Itens>
                    <Gaming color={hovered == "Gaming" ? "white": "black"}/>
                    <p>{translations.home.Categories.gaming}</p>
                </Itens>
            </div>
        </CategoriesContainer>
      </Categories>
    </Container>
  )
}

export default CardCategory;
