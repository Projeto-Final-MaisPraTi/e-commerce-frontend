import { createContext, useState } from 'react';
import translations from './Translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
