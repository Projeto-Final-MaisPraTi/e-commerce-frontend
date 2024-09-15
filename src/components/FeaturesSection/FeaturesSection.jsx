import styles from "./FeaturesSection.module.css"; // Importando o CSS Module
import delivery from "../../assets/Icon-Delivery.png";
import customerService from "../../assets/Icon-Customer-service.png";
import secure from "../../assets/Icon-secure.png";
import useLanguage from "../../utils/useLanguage"; // Hook de linguagem para pegar as traduções

const FeaturesSection = () => {
  const { translations } = useLanguage(); // Obtendo as traduções

  return (
    <div className={styles.featuresSection}>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={delivery} alt={translations.features.freeDeliveryAlt} />
        </div>
        <h3>{translations.features.freeDeliveryTitle}</h3>
        <p>{translations.features.freeDeliveryDescription}</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={customerService} alt={translations.features.customerServiceAlt} />
        </div>
        <h3>{translations.features.customerServiceTitle}</h3>
        <p>{translations.features.customerServiceDescription}</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconContainer}>
          <img src={secure} alt={translations.features.moneyBackAlt} />
        </div>
        <h3>{translations.features.moneyBackTitle}</h3>
        <p>{translations.features.moneyBackDescription}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
