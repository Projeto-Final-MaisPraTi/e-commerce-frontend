import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "./utils/LanguageContext.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<ContactPage />} />
          <Route path="/product" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Rota para capturar qualquer caminho inválido */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
