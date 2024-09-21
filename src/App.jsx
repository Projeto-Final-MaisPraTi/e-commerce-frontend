import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "./utils/LanguageContext.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";
import MyAccount from "./pages/MyAccount/MyAccount.jsx";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ContactPage />} />
          <Route path="/products" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<MyAccount />} />
          {/* Rota para capturar qualquer caminho inválido */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
