import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import lupa from "../../../assets/icon_lupa.png";
import cart from "../../../assets/icon_cart.png";
import userIcon from "../../../assets/icon_user=on.png";
import user from "../../../assets/icon_user.png";
import mallbagIcon from "../../../assets/icon_mallbag.png";
import reviewsIcon from "../../../assets/icon_reviews.png";
import logoutIcon from "../../../assets/icon_logout.png";
import "./NavBar.css";
import { logout, getDecodedTokenRole } from "../../../auth";

const NavBar = ({ isUserLoggedIn }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/login");
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
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="links-container">
          <Link to="/">Início</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre nós</Link>
          {isUserLoggedIn && getDecodedTokenRole() && <Link to="/manager">Gerenciador</Link>}
          {!isUserLoggedIn && <Link to="/login">Entrar</Link>}
        </div>
        <div className="actions-container">
          <div className="search-bar">
            <input
              ref={searchInputRef}
              placeholder="O que você está procurando"
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              <img src={lupa} alt="Search Icon" className="search-icon" />
            </button>
          </div>

          {isUserLoggedIn && (
            <div className="icon-group">
              <div className="icon-button">
                <Link to="/cart">
                  <img src={cart} alt="Cart Icon" />
                </Link>
              </div>

              <div className="user-menu-container" ref={userMenuRef}>
                <div className="icon-button" onClick={toggleUserMenu}>
                  <img src={userIcon} alt="User Icon" />
                </div>
                {isUserMenuOpen && (
                  <div className="user-menu">
                    <div className="user-menu-item">
                      <Link to="/account">
                        <img src={user} alt="Account Icon" className="menu-item-icon" />
                        Gerenciar Minha Conta
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/orders">
                        <img src={mallbagIcon} alt="Order Icon" className="menu-item-icon" />
                        Meus Pedidos
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <Link to="/reviews">
                        <img src={reviewsIcon} alt="Reviews Icon" className="menu-item-icon" />
                        Minhas Avaliações
                      </Link>
                    </div>
                    <div className="user-menu-item">
                      <button className="logout-button" onClick={handleLogout}>
                        <img src={logoutIcon} alt="Logout Icon" className="menu-item-icon" />
                        Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
