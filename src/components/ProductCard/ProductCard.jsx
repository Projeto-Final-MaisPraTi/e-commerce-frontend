import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import StarRating from "./StarRating";
const ProductNotFound = "https://placehold.co/400x300";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redireciona para a página de detalhes do produto
    navigate(`/product/${product.id}`);
  };

  if (!product) {
    return "Lista de produtos não encontrada";
  }

  const productImage =
    product.images && product.images.length > 0 ? product.images[0] : ProductNotFound;

  return (
    <div className={styles.productCard} onClick={handleClick}>
      {product.discount === 35 && <div className={styles.badge}>-35%</div>}
      <div className={styles.productImage}>
        <img 
        src={productImage} alt={product.name} className={styles.productImage} />
      </div>
      <div className={styles.productDetails}>
        <h4>{product.name}</h4>
        <div className={styles.reviews}>
          <StarRating rating={product.rating} />
        </div>
        <div className={styles.productPrice}>
          {!product.discount ? (
            <p className={styles.price}>R$ {product.price}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.noDiscountPrice}>
                De: <del>R$ {product.price}</del>
              </p>
              <p className={styles.discountPrice}>
                Por: R$ {(product.price - (product.price / 100) * product.discount).toFixed(3)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
