import styles from "./NewArrival.module.css";
import Ps5 from "../../assets/PS5slim.png";
import Mulher from "../../assets/mulher.png";
import Speakers from "../../assets/speakers.png";
import Perfume from "../../assets/Perfume.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className={styles.newArrivalSection}>
      {/* Destaque */}
      <div className={styles.featured}>
        <span className={styles.featuredTag}></span>
        <p className={styles.featuredText}>Featured</p>
      </div>
      <h2>New Arrival</h2>

      {/* Grid de Produtos */}
      <div className={styles.gridContainer}>
        <div className={`${styles.box} ${styles.box1}`}>
          <img src={Ps5} alt="PlayStation 5" />
          <div className={styles.productInfo}>
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <Link to="/" className={styles.shopButton}>Shop Now</Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <img src={Mulher} alt="Women's Collection" />
          <div className={styles.productInfo}>
            <h2>Women's Collections</h2>
            <p>Featured women collections that give you another vibe.</p>
            <Link to="/" className={styles.shopButton}>Shop Now</Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <img src={Speakers} alt="Speakers" />
          <div className={styles.productInfo}>
            <h2>Speakers</h2>
            <p>Amazon wireless speakers.</p>
            <Link to="/" className={styles.shopButton}>Shop Now</Link>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <img src={Perfume} alt="Gucci Perfume" />
          <div className={styles.productInfo}>
            <h2>Gucci Perfume</h2>
            <p>Gucci Intense Oud.</p>
            <Link to="/" className={styles.shopButton}>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
