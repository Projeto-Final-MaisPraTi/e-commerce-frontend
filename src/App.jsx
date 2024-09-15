import "./styles.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import Footer from "./components/Footer/ComponentFooter.jsx";
import CardProduct from "./components/Product/CardProduct.jsx";
import produtos from "./pages/home/products.jsx";
import Home from "./pages/home/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Buttons type={1} text={"add to cart type 1"} />
      <Buttons type={2} text={"buy now type 2"} />
      <Buttons type={3} text={"add to wishlist type 3"} /> */}
      <Footer />
    </>
  );
}

export default App;
