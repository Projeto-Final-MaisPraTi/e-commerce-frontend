import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo.png';
import lupa from '../../assets/Lupa.png';
import wishlist from '../../assets/Wishlist.png';
import cart from '../../assets/Cart.png';
import userIcon from '../../assets/User=On.png';
import user from '../../assets/user.png';
import mallbagIcon from '../../assets/mallbag.png';
import cancelIcon from '../../assets/cancel.png';
import reviewsIcon from '../../assets/Reviews.png';
import logoutIcon from '../../assets/logout.png';
import useLanguage from '../../utils/useLanguage';

const NavBarContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavBarContent = styled.div`
  margin: 40px 135px 16px;
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const OtherContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 118px;
  height: 24px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: transparent;
  flex-grow: 1;
  width: 243px;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.div`
  cursor: pointer;

  img {
    height: 24px;
    width: 24px;
  }
`;

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: linear-gradient(to right, #ed2e7e, #ffd789);
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  min-width: 200px;
  max-width: none;
`;

const UserMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuItemIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavBarContainer>
      <NavBarContent>
        <LogoLinksContainer>
          <Logo src={logo} alt='Logo' />
          <LinksContainer>
            <a href='/home'>{translations.nav.home}</a>
            <a href='/contact'>{translations.nav.contact}</a>
            <a href='/about'>{translations.nav.about}</a>
            {!isUserLoggedIn && <a href='/signup'>{translations.nav.signup}</a>}
          </LinksContainer>
        </LogoLinksContainer>
        <OtherContentContainer>
          <SearchBar>
            <SearchInput
              ref={searchInputRef}
              placeholder={translations.nav.searchPlaceholder}
            />
            <SearchButton onClick={handleSearch}>
              <SearchIcon src={lupa} alt='Search Icon' />
            </SearchButton>
          </SearchBar>
          <IconGroup>
            <IconButton>
              <img src={wishlist} alt='Wishlist Icon' />
            </IconButton>
            <IconButton>
              <img src={cart} alt='Cart Icon' />
            </IconButton>
            {isUserLoggedIn && (
              <UserMenuContainer ref={userMenuRef}>
                <IconButton onClick={toggleUserMenu}>
                  <img src={userIcon} alt='User Icon' />
                </IconButton>
                {isUserMenuOpen && (
                  <UserMenu>
                    <UserMenuItem>
                      <MenuItemIcon src={user} alt='Account Icon' />
                      {translations.nav.manageAccount}
                    </UserMenuItem>
                    <UserMenuItem>
                      <MenuItemIcon src={mallbagIcon} alt='Order Icon' />
                      {translations.nav.myOrder}
                    </UserMenuItem>
                    <UserMenuItem>
                      <MenuItemIcon src={cancelIcon} alt='Cancellations Icon' />
                      {translations.nav.myCancellations}
                    </UserMenuItem>
                    <UserMenuItem>
                      <MenuItemIcon src={reviewsIcon} alt='Reviews Icon' />
                      {translations.nav.myReviews}
                    </UserMenuItem>
                    <UserMenuItem>
                      <MenuItemIcon src={logoutIcon} alt='Logout Icon' />
                      {translations.nav.logout}
                    </UserMenuItem>
                  </UserMenu>
                )}
              </UserMenuContainer>
            )}
          </IconGroup>
        </OtherContentContainer>
      </NavBarContent>
    </NavBarContainer>
  );
};

export default NavBar;
