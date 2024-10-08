import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "./utils/LanguageContext.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/register.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import CheckoutPage from "./pages/Checkout/Checkout.jsx";
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";
import MyAccount from "./pages/MyAccount/MyAccount.jsx";
import About from "./pages/About/AboutPage.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="1092492564673-82i70fnc9vjtmq7kbldo38girs5urlgr.apps.googleusercontent.com">
      <LanguageProvider>
        <Router>
          <Routes>
            {/* Responsável: Todos */}
            <Route path="/" element={<Home />} />
            {/* Responsável: Danilo */}
            <Route path="/login" element={<Login />} />
            {/* Responsável: Danilo */}
            <Route path="/register" element={<Register />} />
            {/* Responsável: José */}
            <Route path="/about" element={<About />} />
            {/* Responsável: Henrique */}
            <Route
            path="/product"
            element={
              <ProductDetails productName={"Havic HV G-92 Gamepad"} price={192.0} quantity={2} />
            }
          />
            {/* Responsável: Gabriel W. */}
            <Route path="/contact" element={<ContactPage />} />
            {/* Responsável: Gabriel W. */}
            <Route path="/cart" element={<CartPage />} />
            {/* Responsável: Francieli */}
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* Responsável: Luiz Lobato */}
            <Route path="/account" element={<MyAccount />} />
            {/* Rota para capturar qualquer caminho inválido */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
