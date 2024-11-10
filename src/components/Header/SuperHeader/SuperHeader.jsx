// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import menuIcon from "../../../assets/icon_menu.png";
// import useLanguage from "../../../utils/useLanguage";
import "./SuperHeader.css";

const SuperHeader = () => {
  // const { language, switchLanguage } = useLanguage();
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Verifica se o idioma preferido foi salvo no localStorage e se o idioma atual não é o mesmo. Caso seja, não faz nada. Caso não seja, altera o idioma para o idioma preferido.
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("preferredLanguage");
  //   if (savedLanguage && savedLanguage !== language) {
  //     switchLanguage(savedLanguage);
  //   }
  // });

  // const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // const selectLanguage = (lang) => {
  //   const langCode = lang === "English" ? "en" : "pt";
  //   switchLanguage(langCode);
  //   localStorage.setItem("preferredLanguage", langCode);
  //   setDropdownOpen(false);
  // };

  return (
    <div className="super-header">
      <div className="super-header-content">
        <div className="text-link-container">
          <p>Aproveite nossas incríveis ofertas - DESCONTO DE 35%!</p>
          <a href="/">Compre Agora</a>
          <Link></Link>
        </div>
      </div>
      {/* <div className="language-select-container">
        <button
          className="language-select-button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <span>{language === "en" ? "English" : "Português"}</span>

        </button>
        <div className={`language-dropdown ${isDropdownOpen ? "open" : ""}`}>
          {["English", "Português"].map((lang) => (
            <div key={lang} onClick={() => selectLanguage(lang)}>
              {lang}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SuperHeader;
