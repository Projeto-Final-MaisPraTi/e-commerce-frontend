import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import ProductsData from "../../utils/ProductsData";
import { useState, useEffect } from "react";
import useLanguage from "../../utils/useLanguage";
import { useNavigate } from "react-router-dom";
// import Buttons from "../Buttons/Buttons";

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
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
  .produtos {
    display: flex;
    gap: 15px;
    padding: 15px;
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .produtos > * {
    flex: 0 1 calc(25% - 15px); /* 4 produtos por linha */
    box-sizing: border-box;
  }

  @media (max-width: 1200px) {
    .produtos > * {
      flex: 0 1 calc(33.33% - 15px); /* 3 colunas em telas médias */
    }
  }

  @media (max-width: 768px) {
    .produtos > * {
      flex: 0 1 calc(50% - 15px); /* 2 colunas em telas pequenas */
    }
  }

  @media (max-width: 480px) {
    .produtos > * {
      flex: 0 1 100%; /* 1 coluna em telas muito pequenas */
    }
  }
`;

const SecTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  button {
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #db4444;
    width: 120px;
    &:hover {
      background-color: #da5151;
    }
  }
`;

const BestSelling = () => {
  const { translations } = useLanguage();
  const [maxProducts, setMaxProducts] = useState(7);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();

  // Função para ajustar o número de produtos conforme a largura da tela
  const handleMaxProducts = () => {
    const width = window.innerWidth;

    if (width >= 2560) {
      // 2K resolution - Mostrar no máximo 7 produtos, já que são os disponíveis
      setMaxProducts(8);
    } else if (width >= 1200) {
      // Full HD and larger screens
      setMaxProducts(4);
    } else if (width >= 768) {
      // Tablets and medium screens
      setMaxProducts(6);
    } else if (width >= 480) {
      // Small screens like phones
      setMaxProducts(4);
    } else {
      // Very small screens
      setMaxProducts(2);
    }
  };

  useEffect(() => {
    // Filtrar produtos sem desconto e embaralhar uma única vez
    const filteredProducts = ProductsData.filter((product) => product.isBestSelling);
    const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
    setRandomProducts(shuffledProducts);
    handleMaxProducts();
    window.addEventListener("resize", handleMaxProducts);

    return () => {
      window.removeEventListener("resize", handleMaxProducts);
    };
  }, []);

  const handleViewAllClick = () => {
    navigate("/category/bestselling", { state: { products: randomProducts } });
  };
  return (
    <Container>
      <div className="title">
        <span className="color"></span>
        <p>{translations.home.BestSelling.p}</p>
      </div>
      <SecTitle>
        <h2>{translations.home.BestSelling.h2}</h2>
        <button onClick={handleViewAllClick}>{translations.home.BestSelling.viewer}</button>
        {/* <Buttons
          type={1}
          text="View all"
          paddingX={48}
          paddingY={16}
          onClick={handleBestSellingClick}
        /> */}
      </SecTitle>
      <div className="produtos">
        {randomProducts.slice(0, maxProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default BestSelling;
