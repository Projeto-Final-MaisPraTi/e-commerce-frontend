import SuperHeader from "./SuperHeader/SuperHeader";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const isUserLogged = true;
  return (
    <>
      <SuperHeader />
      <NavBar isUserLoggedIn={isUserLogged} />
    </>
  );
};

export default Header;
