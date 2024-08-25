import SuperHeader from "./SuperHeader";
import NavBar from "./NavBar";
import FooterHeader from "./FooterHeader";
import { LanguageProvider } from "../../utils/LanguageContext";

const Header = () => {
  const isUserLogged = true;
  return (
    <LanguageProvider>
      <SuperHeader />
      <NavBar isUserLoggedIn={isUserLogged} />
      <FooterHeader />
    </LanguageProvider>
  );
};

export default Header;
