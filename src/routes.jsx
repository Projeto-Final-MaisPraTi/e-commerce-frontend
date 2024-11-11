import { isAuthenticated } from "./auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/register.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import CheckoutPage from "./pages/Checkout/Checkout.jsx";
import PageNotFound from "./pages/404NotFound/PageNotFound.jsx";
import MyAccount from "./pages/MyAccount/MyAccount.jsx";
import Product from "./pages/Product/Product.jsx";
import CategoryPage from "./pages/Category/CategoryPage.jsx";
import RegisterProduct from "./pages/RegisterProduct/RegisterProduct.jsx";
import SearchUpdateProduct from "./pages/UpdateProduct/SearchUpdateProduct.jsx";
import ManagerProduct from "./pages/HomeManagerProduct/Manager.jsx";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct.jsx";
import HomeManager from "./pages/HomeManagerProduct/HomeManager.jsx";
import MyPayment from "./pages/MyPayment/MyPayment.jsx";
import About from "./pages/About/AboutPage.jsx";
import ErrorBoundary from "./pages/Error/ErrorBoundary.jsx";

const PrivateRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

const Rotas = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        {/* Responsável: Todos */}
        <Route exact path="/" element={<Home />} />
        {/* Responsável: Danilo */}
        {/* Verifica se está autenticado e redireciona caso esteja */}
        <Route
          exact
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />

        <Route
          exact
          path="/register"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Register />}
        />
        {/* Responsável: José */}
        <Route exact path="/about" element={<About />} />
        {/* Responsável: Henrique */}
        <Route exact path="/product/:id" element={<PrivateRoute element={<Product />} />} />
        {/* Responsável: Gabriel W. */}
        <Route exact path="/contact" element={<ContactPage />} />
        {/* Responsável: Gabriel W. */}
        <Route exact path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        {/* Responsável: Francieli */}
        <Route exact path="/checkout" element={<PrivateRoute element={<CheckoutPage />} />} />
        {/* Responsável: Luiz Lobato */}
        <Route exact path="/account" element={<PrivateRoute element={<MyAccount />} />} />
        <Route exact path="/payment" element={<PrivateRoute element={<MyPayment />} />} />
        {/* Responsável: Gabriel Bertollo */}
        <Route
          exact
          path="/category/:category"
          element={<PrivateRoute element={<CategoryPage />} />}
        />
        <Route
          exact
          path="/category/explore"
          element={<PrivateRoute element={<CategoryPage />} />}
        />
        <Route
          exact
          path="/category/bestselling"
          element={<PrivateRoute element={<CategoryPage />} />}
        />
        {/* Responsável: Erick */}
        <Route path="/manager" element={<ManagerProduct />}>
          <Route index element={<HomeManager />} />
          <Route path="register" element={<RegisterProduct />} />
          <Route path="update" element={<SearchUpdateProduct />} />
          <Route path="update/:id" element={<UpdateProduct />} />
        </Route>
        {/* Rota para capturar qualquer caminho inválido */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Rotas;
