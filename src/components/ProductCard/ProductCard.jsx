import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
const ProductNotFound = "https://via.placeholder.com/400x300";
import StarRating from "./StarRating";
import useLanguage from "../../utils/useLanguage";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { translations } = useLanguage();

  const handleClick = () => {
    // Redireciona para a página de detalhes do produto
    navigate(`/product/${product.id}`);
  };

  if (!product) {
    return "Lista de produtos não encontrada";
  }

  function formatarDinheiro(valor, moeda) {
    const opcoes = {
      style: 'currency',
      currency: moeda,
    };
  
    // Definindo a localidade com base na moeda
    const locale = moeda === 'BRL' ? 'pt-BR' : 'en-US';
    
    const formato = new Intl.NumberFormat(locale, opcoes);
    return formato.format(valor);
  }

  const productImage =
    product.images && product.images.length > 0 ? product.images[0] : ProductNotFound;

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <img src={productImage} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>{formatarDinheiro(product.price, translations.currency)}</p>
        <div className={styles.productRating}>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
