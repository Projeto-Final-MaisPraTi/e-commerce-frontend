import Products from "../../utils/ProductsData";
import styles from "./Category.module.css";
import StarRating from "../ProductCard/StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function Category({ selectedCategory }) {
  // const location = useLocation(); // Hook para acessar o state
  // let selectedElements = selectedCategory;

  // // Se houver produtos passados via state, exibi-los
  // if (location.state && location.state.products) {
  //   selectedElements = location.state.products;
  // } else {
  //   // Caso contrário, continue com a lógica de categoria selecionada
  //   for (let i = 0; i < Products.length; i++) {
  //     if (Products[i].category == selectedCategory) {
  //       selectedElements.push(Products[i]);
  //     }
  //   }
  // }

  return (
    <section className={styles.productList}>
      {selectedCategory.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <img src={product.images} alt={product.nome} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product.nome}</h2>
            <p className={styles.description}>{product.descricao}</p>
            <div className={styles.reviews}>
              <StarRating rating={product.nota} />
            </div>
          </div>
          {product.discount === 0 ? (
            <p className={styles.price}>R$ {product.preco}</p>
          ) : (
            <div className={styles.discount}>
              <p className={styles.noDiscountPrice}>
                De: <del>R$ {product.preco}</del>{" "}
                <span className={styles.badge}>10% off</span>
              </p>
              <p className={styles.discountPrice}>
                Por: R$ {(product.preco - (product.preco / 100) * 10).toFixed(3)}
              </p>
            </div>
          )}
          <button className={styles.buyButton}>Comprar</button>
        </div>
      ))}
    </section>
  );
}

export default Category;
