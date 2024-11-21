import styles from "./DetalhesProduto.module.css";
import DotsLoader from "../DotLoader/DotLoader";
import Rating from "@mui/material/Rating";
import { getProductDetails } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../services/CartService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const DetalhesProduto = ({product}) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();
  const productId = parseInt(id);
  // const [product, setProduct] = useState();
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  // Adicionar avaliação
  const handleRatingChange = async (newRating) => {
    try {
      const token = localStorage.getItem("jwt");

      if (!token) {
        throw new Error("Usuário não autenticado!");
      }

      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const reviewData = {
        avaliacao: newRating,
        productId: productId,
        userId: userId,
      };

      await axios.post("http://localhost:8080/api/reviews", reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Avaliação enviada com sucesso!");
      setUserRating(newRating);

      fetchRatings();
    } catch (error) {
      console.error("Erro ao enviar avaliação:", error);
      setErrorMessage("Erro ao enviar avaliação. Tente novamente mais tarde.");
    }
  };

  const handleAddToCart = async () => {
    try {
      const itemCartData = {
        productDetailsDTO: { id: product.id },
        quantidade: 1,
      };
      const response = await addItemToCart(itemCartData);
      console.log("Item adicionado ao carrinho com sucesso:", response);
      navigate(`/cart`);
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
      alert("Erro ao adicionar item ao carrinho. Tente novamente mais tarde.");
    }
  };

  // Buscar avaliações
  const fetchRatings = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${productId}`,
      );
      const reviews = response.data;

      // Cálculo no frontend
      const totalRatings = reviews.length;
      const averageRating = totalRatings
        ? reviews.reduce((sum, review) => sum + review.avaliacao, 0) / totalRatings
        : 0;

      setAverageRating(averageRating);
      setTotalRatings(totalRatings);
      console.log("Resposta ao buscar avaliações:", response.data);
    } catch (error) {
      console.error("Erro ao carregar avaliações:", error);
    }
  };

  useEffect(() => {
    getProductDetails(id).then((result) => {
      setProduct(result);
    });
    fetchRatings();
  }, [id]);

  if (!product) {
    return <DotsLoader />;
  }

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + product.images.length) % product.images.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {product.images.map((img, index) => (
            <div className={styles.slide} key={index}>
              <img src={img} alt={product.name} />
            </div>
          ))}
        </div>
        <button className={styles.prev} onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className={styles.next} onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>

      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <div className={styles.price}>
          {!product.priceDiscount ? (
            <p className={styles.price}>{product.price}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.discountPrice}>
                {product.priceDiscount}
                <span className={styles.badge}>{product.discount}% off</span>
              </p>
            </div>
          )}
        </div>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.colorSelection}>Cor disponível: {product.color}</p>

        <div className={styles.reviewsSection}>
          <div className={styles.averageRating}>
            <h3>Média de Avaliações</h3>
            <p>
              <strong>{averageRating.toFixed(1)}</strong> ({totalRatings} avaliações)
            </p>
          </div>
          <div className={styles.userReview}>
            <Rating
              name="user-rating"
              value={userRating}
              precision={1}
              onChange={(event, newValue) => handleRatingChange(newValue)}
            />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
        </div>

        <button className={styles.addToCart} onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
        <div className={styles.infoCard}>
          <div className={styles.infoSection}>
            <h3>Entrega Gratuita</h3>
            <p>Entregamos gratuitamente para todo Brasil.</p>
          </div>
          <div className={styles.infoSection}>
            <h3>Devolução gratuita</h3>
            <p>30 dias para devolução.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesProduto;
