import styled from "styled-components";
import ProductsData from "../../utils/ProductsData";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/ProductService";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

// Styled components
const Container = styled.div`
  padding: 20px 10%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;

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
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: hidden;
    padding: 15px 10px;
    gap: 15px;
    width: 100%;
  }

  .produtos > * {
    flex: 0 1 calc(25% - 15px); //4 produtos por linha
    box-sizing: border-box;
  }

  /* Responsividade para telas médias */
  @media (max-width: 1200px) {
    .produtos > * {
      flex: 0 1 calc(33.33% - 15px); /* 3 colunas */
    }
  }

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    .produtos > * {
      flex: 0 1 calc(50% - 15px); /* 2 colunas */
    }
  }

  /* Responsividade para telas pequenas */
  @media (max-width: 480px) {
    .produtos > * {
      flex: 0 1 100%; /* 1 coluna */
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
    background-color: dodgerblue;
    width: 120px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1f81e2;
    }
  }
`;

const ExploreProducts = () => {
  const [maxProducts, setMaxProducts] = useState(8);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);

  // Função para ajustar o número de produtos conforme a largura da tela
  const handleMaxProducts = () => {
    const width = window.innerWidth;

    if (width >= 2560) {
      setMaxProducts(12); // Telas 2K e superiores
    } else if (width >= 1200) {
      setMaxProducts(8); // Full HD e maiores
    } else if (width >= 768) {
      setMaxProducts(6); // Tablets e telas médias
    } else if (width >= 480) {
      setMaxProducts(4); // Telas pequenas
    } else {
      setMaxProducts(2); // Telas muito pequenas
    }
  };

  useEffect(() => {

    getAllProducts()
      .then(result => {

        const shuffledProducts = result.content.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts);
        setLoad(false);
        handleMaxProducts();
      }).catch(error => {
        console.log("Erro ao carregar:" + error)
      });
  }, [])

  useEffect(() => {
    // const filteredProducts = ProductsData.filter((product) => !product.isBestSelling);
    // const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
    // setRandomProducts(shuffledProducts);
    handleMaxProducts();
    window.addEventListener("resize", handleMaxProducts);

    return () => {
      window.removeEventListener("resize", handleMaxProducts);
    };
  }, []);

  const handleViewAllClick = () => {
    navigate("/category/explore", { state: { products: randomProducts } });
  };

  return (
    <Container>
      <div className="title">
        <span className="color"></span>
        <p>Nossos Produtos</p>
      </div>
      <SecTitle>
        <h2>Explore Nossos Produtos</h2>
        <button onClick={handleViewAllClick}>Ver Todos</button>
      </SecTitle>
      <div className="produtos">
        {load && (
          Array.from({ length: maxProducts }).map((_, index) => (
            <ProductCardSkeleton cards={1} key={index} />
          ))
        )}
        {randomProducts.slice(0, maxProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ExploreProducts;
