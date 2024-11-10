import styles from "./FeaturesSection.module.css"; // Importando o CSS Module
import delivery from "../../assets/icon_delivery.png";
import customerService from "../../assets/icon_customer_service.png";
import secure from "../../assets/icon_secure.png";

const FeaturesSection = () => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={delivery} alt="Ícone de Entrega Grátis e Rápida" />
        </div>
        <h3>ENTREGA GRÁTIS E RÁPIDA</h3>
        <p>Entrega grátis para todo o Brasil</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={customerService} alt="Ícone de Atendimento ao Cliente 24/7" />
        </div>
        <h3>ATENDIMENTO AO CLIENTE</h3>
        <p>Suporte ao cliente disponível 24/7</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={secure} alt="Ícone de Garantia de Devolução de Dinheiro" />
        </div>
        <h3>GARANTIA DE DEVOLUÇÃO DE DINHEIRO</h3>
        <p>Devolvemos o dinheiro em até 30 dias</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
