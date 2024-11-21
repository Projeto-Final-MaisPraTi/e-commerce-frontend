import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating"; // Importação do componente Rating do MUI
import styles from "./ProductCard.module.css";

const ProductNotFound = "https://placehold.co/400x300";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  // Buscar avaliações do produto
  const fetchRatings = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${product.id}`,
      );

      const reviews = response.data; // Recebe o array de avaliações do backend

      if (reviews.length > 0) {
        // Calcula a soma das avaliações no campo 'avaliacao'
        const totalRatings = reviews.length;
        const averageRating =
          reviews.reduce((sum, review) => sum + review.avaliacao, 0) / totalRatings;

        setAverageRating(averageRating);
        setTotalRatings(totalRatings);
      } else {
        setAverageRating(0);
        setTotalRatings(0);
      }
    } catch (error) {
      console.error("Erro ao carregar avaliações:", error);
      setAverageRating(0);
      setTotalRatings(0);
    }
  };

  useEffect(() => {
    if (product && product.id) {
      fetchRatings();
    }
  }, [product]);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  if (!product) {
    return "Lista de produtos não encontrada";
  }

  const productImage = product.cover
    ? product.cover
    : product.images
    ? product.images[0]
    : ProductNotFound;

  return (
    <div className={styles.productCard} onClick={handleClick}>
      {product.discount !== 0 && <div className={styles.badge}>{product.discount}%</div>}
      <div className={styles.productImage}>
        <img src={productImage} alt={product.name} className={styles.productImage} />
      </div>
      <div className={styles.productDetails}>
        <h4>{product.name}</h4>
        <div className={styles.reviews}>
          {/* Rating do MUI exibindo a média de avaliações */}
          {totalRatings > 0 ? (
            <Rating name={`rating-${product.id}`} value={averageRating} precision={0.1} readOnly />
          ) : (
            <span>Sem avaliações</span>
          )}
        </div>
        <div className={styles.productPrice}>
          {!product.discount ? (
            <p className={styles.price}>{product.price}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.noDiscountPrice}>
                De: <del>{product.price}</del>
              </p>
              <p className={styles.discountPrice}>Por: {product.priceDiscount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
