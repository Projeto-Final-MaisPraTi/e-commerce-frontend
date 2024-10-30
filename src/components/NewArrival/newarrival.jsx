import styles from "./NewArrival.module.css";
import G933 from "../../assets/headphones/Logitech_G933_black_1.png";
import Ultra from "../../assets/smartwatches/Apple_Watch_Series_Ultra_black_1.png";
import Zenbook from "../../assets/computers/Asus_Zenbook_S14_black_1.png";
import Iphone15 from "../../assets/phones/Apple_Iphone_15_pro_grey_1.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className={styles.newArrivalSection}>
      {/* Destaque */}
      <div className={styles.featured}>
        <span className={styles.featuredTag}></span>
        <p className={styles.featuredText}>Em destaque</p>
      </div>
      <h2>Recém Chegados</h2>

      {/* Grid de Produtos */}
      <div className={styles.gridContainer}>
        <div className={`${styles.box} ${styles.box1}`}>
          <img src={G933} alt="Logitech G933" />
          <div className={styles.productInfo}>
            <h2>Logitech G933</h2>
            <p>Fone de ouvido gamer sem fio premium com cancelamento de ruído e corpo leve.</p>
            <Link to="/" className={styles.shopButton}>
              Comprar Agora
            </Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <img src={Ultra} alt="Apple Watch Ultra" />
          <div className={styles.productInfo}>
            <h2>Apple Watch Ultra</h2>
            <p>Smartwatch de última geração. Perfeito para esportes e aventuras.</p>
            <Link to="/" className={styles.shopButton}>
              Comprar Agora
            </Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <img src={Zenbook} alt="Zenbook" />
          <div className={styles.productInfo}>
            <h2>Asus Zenbook S14</h2>
            <p>CPU Intel Core de última geração. Design leve e fino.</p>
            <Link to="/" className={styles.shopButton}>
              Comprar Agora
            </Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <img src={Iphone15} alt="Iphone 15 Pro" />
          <div className={styles.productInfo}>
            <h2>Apple Iphone 15 Pro</h2>
            <p>Experimente o iPhone de uma maneira totalmente nova.</p>
            <Link to="/" className={styles.shopButton}>
              Comprar Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
