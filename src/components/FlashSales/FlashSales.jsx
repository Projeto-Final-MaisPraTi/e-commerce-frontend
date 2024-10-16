import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import ProductsData from "../../utils/ProductsData";

const FlashSalesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  overflow: hidden;

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

const Header = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui espaço entre os elementos */
  align-items: center; /* Centraliza verticalmente os elementos */
  margin-bottom: 20px;

  @media (max-width: 766px) {
    flex-direction: column; /* Torna o header do componente vertical em telas menores */
    gap: 15px; /* Da um espaço entre os itens na vertical*/
    align-items: flex-start; /* Alinha os itens na esquerda*/
  }
`;

const TitleTimerWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha os itens no início */
  gap: 20px; /* Espaço entre o título e o bloco do timer    */
`;

const Title = styled.h2`
  margin: 0;
  font-size: 34px;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Alinha o título e o timer verticalmente */
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui os rótulos uniformemente */
  width: 100%; /* Garante que os rótulos ocupem a mesma largura do timer */
  margin-bottom: 5px; /* Espaçamento entre os rótulos e o timer */
  font-size: 14px; /* Tamanho menor para os rótulos */
`;

const Timer = styled.div`
  font-size: 34px;
`;

const ArrowsWrapper = styled.div`
  display: flex; /* Coloca as setas lado a lado */
  gap: 10px; /* Adiciona espaço entre as setas */
  /* padding-right: 200px; Afasta as setas do canto direito */
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

const ProductsCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Oculta a barra de rolagem no IE e Edge */
  scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
  padding: 10px;

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem no Chrome, Safari e Opera */
  }
  /* Adicionar comportamento de snap ao rolar */
  scroll-snap-type: x mandatory;
`;

const ProductWrapper = styled.div`
  flex: 0 0 270px;
  margin: 10px;
`;

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(116196); // 03:23:19:56 em segundos
  const carouselRef = useRef(null);

  // Filtrar produtos com desconto
  const filteredProducts = ProductsData.filter((product) => product.discount === 35);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 285; // 270px de largura + 15px de margem
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(days).padStart(2, "0")} : ${String(hours).padStart(2, "0")} : ${String(
      minutes,
    ).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  return (
    <FlashSalesContainer>
      <div className="title">
        <span className="color"></span>
        <p>Today&apos;s</p>
      </div>
      <Header>
        <Title>Flash Sales</Title>
        <TitleTimerWrapper>
          <TimerWrapper>
            <LabelWrapper>
              <div>Days</div>
              <div>Hours</div>
              <div>Minutes</div>
              <div>Seconds</div>
            </LabelWrapper>
            <Timer>{formatTime(timeLeft)}</Timer>
          </TimerWrapper>
        </TitleTimerWrapper>
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
      </Header>
      <ProductsCarousel ref={carouselRef}>
        {filteredProducts.map((product) => (
          <ProductWrapper key={product.id}>
            <ProductCard product={product} />
          </ProductWrapper>
        ))}
      </ProductsCarousel>
    </FlashSalesContainer>
  );
};

export default FlashSales;
