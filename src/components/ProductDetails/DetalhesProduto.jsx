import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetalhesProduto.module.css";
import StarRating from "../ProductCard/StarRating";
import ProductsData from "../../utils/ProductsData";
import PageNotFound from "../404NotFound/404NotFound";

const DetalhesProduto = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams(); // Obtém o ID do produto da URL
  const productId = parseInt(id); // Converte o ID para um número inteiro
  const product = ProductsData.find((item) => item.id === productId); // Busca o produto com o ID correspondente

  // Verifica se o produto existe
  if (!product) {
    return <PageNotFound />;
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
        <p className={styles.price}>
          {product.discount === 0 ? (
            <p className={styles.price}>R$ {product.price}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.discountPrice}>
                R$ {(product.price - (product.price / 100) * product.discount).toFixed(3)}
                <span className={styles.badge}>{product.discount}% off</span>
              </p>
            </div>
          )}
          {/* R$ {product.price} {product.discount === 35 && <span className={styles.badge}>-{product.discount}%</span>} */}
        </p>
        <p className={styles.description}>{product.description}</p>

        <p className={styles.colorSelection}>Cor disponível: {product.color}</p>
        <div className={styles.reviews}>
          <StarRating rating={product.rating} />
        </div>

        <button className={styles.addToCart}>Adicionar ao Carrinho</button>

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