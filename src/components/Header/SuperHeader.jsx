import { useState } from "react";
import styled from "styled-components";
import menuIcon from "../../assets/menuIcon.png";
import useLanguage from "../../utils/useLanguage";

const SuperHeaderContainer = styled.div`
  background-color: black;
  color: white;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

const SuperHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  margin: 0 8.5rem 0 27.9rem;

  @media (max-width: 1440px) {
    margin: 0 8.5rem 0 24rem;
    gap: 3rem;
  }

  @media (max-width: 1200px) {
    margin: 0 8.5rem 0 20rem;
    gap: 3rem;
  }

  @media (max-width: 992px) {
    margin: 0 5.8rem 0 16.54rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.625rem;
    margin: 0 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0 1rem;
  }
`;

const TextLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  text-align: center;

  a {
    color: white;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.875rem; /* 14px */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.375rem; /* 6px */
  }
`;

const LanguageSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */

  @media (max-width: 768px) {
    margin-top: 0.625rem; /* 10px */
    width: 100%;
    justify-content: center;
  }
`;

const LanguageSelectButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  cursor: pointer;
  padding: 0;
  font-size: 0.875rem; /* 14px */
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const ArrowIcon = styled.img`
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  transition: transform 0.3s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  @media (max-width: 768px) {
    width: 1rem; /* 16px */
    height: 1rem; /* 16px */
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  background-color: white;
  color: black;
  border: 1px solid #ddd;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 4px 8px */
  z-index: 1000;
  width: 7.5rem; /* 120px */
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  max-height: ${({ $isOpen }) => ($isOpen ? "12.5rem" : "0")}; /* 200px */
  overflow: auto;
  transition: max-height 0.3s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 9.375rem; /* 150px */
  }
`;

const DropdownItem = styled.div`
  padding: 0.5rem 0.75rem; /* 8px 12px */
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 0.625rem 0.9375rem; /* 10px 15px */
  }
`;

const SuperHeader = () => {
  const { language, switchLanguage, translations } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const selectLanguage = (lang) => {
    switchLanguage(lang === "English" ? "en" : "pt");
    setDropdownOpen(false);
  };

  return (
    <SuperHeaderContainer>
      <SuperHeaderContent>
        <TextLinkContainer>
          <p>{translations.headerText}</p>
          <a href="/shopnow">{translations.shopNow}</a>
        </TextLinkContainer>
        <LanguageSelectContainer>
          <LanguageSelectButton
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <span>{language === "en" ? "English" : "Português"}</span>
            <ArrowIcon src={menuIcon} alt="Arrow Icon" $isOpen={isDropdownOpen} />
          </LanguageSelectButton>
          <DropdownMenu $isOpen={isDropdownOpen}>
            {["English", "Português"].map((lang) => (
              <DropdownItem key={lang} onClick={() => selectLanguage(lang)}>
                {lang}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </LanguageSelectContainer>
      </SuperHeaderContent>
    </SuperHeaderContainer>
  );
};

export default SuperHeader;
