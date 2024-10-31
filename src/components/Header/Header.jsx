import SuperHeader from "./SuperHeader/SuperHeader";
import NavBar from "./NavBar/NavBar";
import { isAuthenticated } from "../../auth";

const Header = () => {
  return (
    <>
      <SuperHeader />
      <NavBar isUserLoggedIn={isAuthenticated} />
    </>
  );
};

export default Header;
