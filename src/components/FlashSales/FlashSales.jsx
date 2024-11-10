import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import ProductsData from "../../utils/ProductsData";
import { getFlashSalesProducts } from "../../services/ProductService";

const FlashSalesContainer = styled.div`
  padding: 20px 10%;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    p {
      color: dodgerblue;
      font-weight: bold;
      margin: 0;
    }
  }

  .color {
    margin-right: 10px;
    height: 30px;
    width: 18px;
    background-color: dodgerblue;
    border-radius: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 766px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

const TitleTimerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 34px;

  @media (max-width: 480px) {
    font-size: 28px; /* Reduz o título para telas pequenas */
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px; /* Reduz o tamanho dos rótulos em telas pequenas */
  }
`;

const Timer = styled.div`
  font-size: 34px;

  @media (max-width: 480px) {
    font-size: 24px; /* Reduz o tamanho do timer em telas pequenas */
  }
`;

const ArrowsWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-around; /* Distribui as setas igualmente em telas pequenas */
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
  z-index: 2;

  &:hover {
    background-color: #bbb;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #000;
  }

  @media (max-width: 480px) {
    width: 35px; /* Reduz o tamanho dos botões em telas menores */
    height: 35px;
  }
`;

const ProductsCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 10px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductWrapper = styled.div`
  flex: 0 0 270px;
  margin: 10px;

  @media (max-width: 768px) {
    flex: 0 0 220px; /* Reduz a largura dos produtos em tablets */
  }

  @media (max-width: 480px) {
    flex: 0 0 180px; /* Reduz a largura dos produtos em dispositivos móveis */
  }
`;

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(116196); // 03:23:19:56 em segundos
  const carouselRef = useRef(null);

  const filteredProducts = ProductsData.filter((product) => product.discount === 35);

  const [data, setData] = useState([]);

  useEffect(() => {

    getFlashSalesProducts()
    .then(result => {
      setData(result.content)
      });
      console.log(data);
  },[])


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

    return () => clearInterval(interval);
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
        <p>Hoje</p>
      </div>
      <Header>
        <Title>Ofertas Relâmpago</Title>
        <TitleTimerWrapper>
          <TimerWrapper>
            <LabelWrapper>
              <div>Dias</div>
              <div>Horas</div>
              <div>Minutos</div>
              <div>Segundos</div>
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
        {data.map((product) => (
          <ProductWrapper key={product.id}>
            <ProductCard product={product} />
          </ProductWrapper>
        ))}
      </ProductsCarousel>
    </FlashSalesContainer>
  );
};

export default FlashSales;
