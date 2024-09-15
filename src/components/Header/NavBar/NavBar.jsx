import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import lupa from "../../../assets/Lupa.png";
import wishlist from "../../../assets/Wishlist.png";
import cart from "../../../assets/Cart.png";
import userIcon from "../../../assets/User=On.png";
import user from "../../../assets/user.png";
import mallbagIcon from "../../../assets/mallbag.png";
import cancelIcon from "../../../assets/cancel.png";
import reviewsIcon from "../../../assets/Reviews.png";
import logoutIcon from "../../../assets/Logout.png";
import useLanguage from "../../../utils/useLanguage";
import "./NavBar.css";

const NavBar = ({ isUserLoggedIn }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const { translations } = useLanguage();

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setUserMenuOpen(false);
    }
  };

  const handleSearch = () => {
    const query = searchInputRef.current.value;
    if (query) {
      console.log(`Procurando por: ${query}`);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Links de navegação */}
        <div className="links-container">
          <Link to="/">{translations.nav.home}</Link>
          <Link to="/contact">{translations.nav.contact}</Link>
          <Link to="/about">{translations.nav.about}</Link>
          {!isUserLoggedIn && <Link to="/signup">{translations.nav.signup}</Link>}
        </div>

        {/* Barra de busca e ícones de ações */}
        <div className="actions-container">
          {/* Barra de busca */}
          <div className="search-bar">
            <input
              ref={searchInputRef}
              placeholder={translations.nav.searchPlaceholder}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              <img src={lupa} alt="Search Icon" className="search-icon" />
            </button>
          </div>

          {/* Ícones de ações */}
          <div className="icon-group">
            <div className="icon-button">
              <Link to="/wishlist">
                <img src={wishlist} alt="Wishlist Icon" />
              </Link>
            </div>
            <div className="icon-button">
              <Link to="/cart">
                <img src={cart} alt="Cart Icon" />
              </Link>
            </div>

            {/* Menu de usuário (condicional) */}
            {isUserLoggedIn && (
              <div className="user-menu-container" ref={userMenuRef}>
                <div className="icon-button" onClick={toggleUserMenu}>
                  <img src={userIcon} alt="User Icon" />
                </div>
                {isUserMenuOpen && (
                  <div className="user-menu">
                    <div className="user-menu-item">
                      <Link to="/account">
                        <img src={user} alt="Account Icon" className="menu-item-icon" />
                        {translations.nav.manageAccount}
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/orders">
                        <img src={mallbagIcon} alt="Order Icon" className="menu-item-icon" />
                        {translations.nav.myOrder}
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/cancellations">
                        <img src={cancelIcon} alt="Cancellations Icon" className="menu-item-icon" />
                        {translations.nav.myCancellations}
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/reviews">
                        <img src={reviewsIcon} alt="Reviews Icon" className="menu-item-icon" />
                        {translations.nav.myReviews}
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/logout">
                        <img src={logoutIcon} alt="Logout Icon" className="menu-item-icon" />
                        {translations.nav.logout}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
