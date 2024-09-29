import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
// const imagemtest = "https://via.placeholder.com/400x300";
// import imagemteste2 from "../../assets/phones/Samsung_Galaxy_S23_black_1.jpg";
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redireciona para a página de detalhes do produto
    navigate(`/product/${product.id}`);
  };

  if (!product) {
    return "Lista de produtos não encontrada";
  }

  const productImage = product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/400x300";

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <img src={productImage} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.productRating}>
        <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
