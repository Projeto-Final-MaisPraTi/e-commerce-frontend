import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating"; // Componente Rating do MUI
import styles from "./Category.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Category = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  if (!token) {
    throw new Error("Usuário não autenticado!");
  }

  // Estado para armazenar as avaliações de cada produto
  const [productRatings, setProductRatings] = useState({});

  // Função para buscar as avaliações de um produto por ID
  const fetchRatings = async (productId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      const reviews = response.data;

      if (reviews.length > 0) {
        // Calcula a média de avaliações para o produto
        const averageRating =
          reviews.reduce((sum, review) => sum + review.avaliacao, 0) / reviews.length;

        // Atualiza o estado com a média de avaliações do produto
        setProductRatings((prevRatings) => ({
          ...prevRatings,
          [productId]: averageRating,
        }));
      } else {
        setProductRatings((prevRatings) => ({
          ...prevRatings,
          [productId]: 0, // Sem avaliações
        }));
      }
    } catch (error) {
      console.error(`Erro ao carregar avaliações do produto ${productId}:`, error);
      setProductRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: 0, // Em caso de erro, define como sem avaliações
      }));
    }
  };

  // Efeito para buscar avaliações para todos os produtos na categoria
  useEffect(() => {
    selectedCategory.forEach((product) => {
      if (product.id) {
        fetchRatings(product.id);
      }
    });
  }, [selectedCategory]);

  // Redirecionamento para a página de detalhes do produto
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className={styles.productList}>
      {selectedCategory.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <img src={product.cover} alt={product.name} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.reviews}>
              {productRatings[product.id] !== undefined ? (
                <Rating
                  name={`rating-${product.id}`}
                  value={productRatings[product.id]}
                  precision={0.1}
                  readOnly
                />
              ) : (
                <span>Carregando avaliações...</span>
              )}
            </div>
          </div>
          {!product.discount ? (
            <p className={styles.price}>{product.price}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.noDiscountPrice}>
                De: <del>{product.price}</del>{" "}
                <span className={styles.badge}>{product.discount}% off</span>
              </p>
              <p className={styles.discountPrice}>Por: {product.priceDiscount}</p>
            </div>
          )}
          <button className={styles.buyButton} onClick={() => handleClick(product.id)}>
            Ver Mais
          </button>
        </div>
      ))}
    </section>
  );
};

export default Category;
