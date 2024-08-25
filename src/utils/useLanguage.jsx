import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
