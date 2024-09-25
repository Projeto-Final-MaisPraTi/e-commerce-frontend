import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import ps5controlImage from "../../assets/ps5control.png";
import tvImage from "../../assets/tv.png";
import notebookImage from "../../assets/notebook.png";
import geladeiraImage from "../../assets/geladeira.png";

const FlashSalesContainer = styled.div`
  width: 80%;
  margin-left: 135px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui espaço entre os elementos */
  align-items: center; /* Centraliza verticalmente os elementos */
  margin-bottom: 20px;
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
  margin-left: 50px;
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

  img {
    max-height: 120px; // Limita a altura da imagem para padronizar
  }

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem no Chrome, Safari e Opera */
  }
`;

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: ps5controlImage,
    discountPrice: "R$120",
    originalPrice: "R$160",
    discount: "-40%",
    reviewCount: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    image: tvImage,
    discountPrice: "R$60",
    originalPrice: "R$100",
    discount: "-35%",
    reviewCount: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: notebookImage,
    discountPrice: "R$370",
    originalPrice: "R$400",
    discount: "-30%",
    reviewCount: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: geladeiraImage,
    discountPrice: "R$375",
    originalPrice: "R$400",
    discount: "-25%",
    reviewCount: 99,
  },
  {
    id: 5,
    title: "Wireless Gaming Mouse",
    image: ps5controlImage,
    discountPrice: "R$45",
    originalPrice: "R$60",
    discount: "-25%",
    reviewCount: 45,
  },
  {
    id: 6,
    title: "Gaming Headset",
    image: ps5controlImage,
    discountPrice: "R$85",
    originalPrice: "R$120",
    discount: "-30%",
    reviewCount: 150,
  },
  {
    id: 7,
    title: "AK-900 Wired Keyboard",
    image: geladeiraImage,
    discountPrice: "R$60",
    originalPrice: "R$100",
    discount: "-35%",
    reviewCount: 75,
  },
  {
    id: 8,
    title: "IPS LCD Gaming Monitor",
    image: notebookImage,
    discountPrice: "R$370",
    originalPrice: "R$400",
    discount: "-30%",
    reviewCount: 99,
  },
  {
    id: 9,
    title: "S-Series Comfort Chair",
    image: geladeiraImage,
    discountPrice: "R$375",
    originalPrice: "R$400",
    discount: "-25%",
    reviewCount: 99,
  },
  {
    id: 10,
    title: "S-Series Comfort Chair",
    image: geladeiraImage,
    discountPrice: "R$375",
    originalPrice: "R$400",
    discount: "-25%",
    reviewCount: 99,
  },
];

const FlashSales = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [timeLeft, setTimeLeft] = useState(116196); // 03:23:19:56 em segundos

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
      <Header>
        <TitleTimerWrapper>
          <Title>Flash Sales</Title>
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsCarousel>
    </FlashSalesContainer>
  );
};

export default FlashSales;
