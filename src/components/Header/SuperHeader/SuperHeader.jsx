import { useState } from "react";
import menuIcon from "../../../assets/menuIcon.png";
import useLanguage from "../../../utils/useLanguage";
import "./SuperHeader.css";

const SuperHeader = () => {
  const { language, switchLanguage, translations } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const selectLanguage = (lang) => {
    switchLanguage(lang === "English" ? "en" : "pt");
    setDropdownOpen(false);
  };

  return (
    <div className="super-header">
      <div className="super-header-content">
        <div className="text-link-container">
          <p>{translations.headerText}</p>
          <a href="/shopnow">{translations.shopNow}</a>
        </div>
      </div>
      <div className="language-select-container">
        <button
          className="language-select-button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <span>{language === "en" ? "English" : "Português"}</span>
          <img
            src={menuIcon}
            alt="Arrow Icon"
            className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
          />
        </button>
        <div className={`language-dropdown ${isDropdownOpen ? "open" : ""}`}>
          {["English", "Português"].map((lang) => (
            <div key={lang} onClick={() => selectLanguage(lang)}>
              {lang}
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SuperHeader;
