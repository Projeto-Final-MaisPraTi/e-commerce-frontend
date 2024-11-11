import { isAuthenticated, logout } from "./auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
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
  return isAuthenticated() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

const Logout = () => {
  logout();
  return <Navigate to="/login" replace />;
}

const Rotas = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Register />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        <Route exact path="/checkout" element={<PrivateRoute element={<CheckoutPage />} />} />
        <Route exact path="/account" element={<PrivateRoute element={<MyAccount />} />} />
        <Route exact path="/payment" element={<PrivateRoute element={<MyPayment />} />} />
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
        <Route path="/manager" element={<ManagerProduct />}>
          <Route index element={<HomeManager />} />
          <Route path="register" element={<RegisterProduct />} />
          <Route path="update" element={<SearchUpdateProduct />} />
          <Route path="update/:id" element={<UpdateProduct />} />
        </Route>
        <Route exact path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Rotas;
