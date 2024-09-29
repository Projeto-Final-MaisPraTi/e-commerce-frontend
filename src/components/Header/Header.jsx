import SuperHeader from "./SuperHeader/SuperHeader";
import NavBar from "./NavBar/NavBar";
import FooterHeader from "./FooterHeader/FooterHeader";

const Header = () => {
  const isUserLogged = true;
  return (
    <>
      <SuperHeader />
      <NavBar isUserLoggedIn={isUserLogged} />
      <FooterHeader />
    </>
  );
};

export default Header;
