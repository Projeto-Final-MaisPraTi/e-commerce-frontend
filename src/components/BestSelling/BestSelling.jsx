import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
// import ProductsData from "../../utils/ProductsData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBestSellersProducts } from "../../services/ProductService";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

const Container = styled.div`
  padding: 20px 10%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: white;

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

  .produtos {
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      flex: 0 1 calc(25% - 15px); /* 4 colunas por linha */
      box-sizing: border-box;
    }
  }

  /* Estilos responsivos */
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
    padding: 20px 5%; /* Reduzindo o padding em telas muito pequenas */

    .title {
      flex-direction: column;
      align-items: flex-start;
    }

    .produtos > * {
      flex: 0 1 100%; /* 1 coluna em telas muito pequenas */
      gap: 10px;
    }
  }
`;

const SecTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-size: 1.5em;
  }

  button {
    color: white;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    width: 120px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1f81e2;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    button {
      width: 100%; /* Botão ocupa toda a largura em telas pequenas */
      margin-top: 10px;
      padding: 8px;
    }
  }
`;

const BestSelling = () => {
  const [maxProducts, setMaxProducts] = useState(7);
  const [randomProducts, setRandomProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  const handleMaxProducts = () => {
    const width = window.innerWidth;

    if (width >= 2560) {
      setMaxProducts(8);
    } else if (width >= 1200) {
      setMaxProducts(5);
    } else if (width >= 768) {
      setMaxProducts(4);
    } else {
      setMaxProducts(2);
    }
  };

  useEffect(() => {
    getBestSellersProducts()
      .then((result) => {
        const shuffledProducts = result.content.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts);
        setLoad(false);
        handleMaxProducts();
      })
      .catch((error) => {
        console.log("Erro ao carregar:" + error);
      });
  }, []);

  useEffect(() => {
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
        <p>Este Mês</p>
      </div>
      <SecTitle>
        <h2>Produtos Mais Vendidos</h2>
        <button onClick={handleViewAllClick}>Ver Todos</button>
      </SecTitle>
      <div className="produtos">
        {load &&
          Array.from({ length: maxProducts }).map((_, index) => (
            <ProductCardSkeleton cards={1} key={index} />
          ))}
        {randomProducts
          ? randomProducts
              .slice(0, maxProducts)
              .map((product) => <ProductCard key={product.id} product={product} />)
          : ""}
      </div>
    </Container>
  );
};

export default BestSelling;
