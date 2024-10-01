import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

function Product() {
  return (
    <>
      <Header />
      <main>
        <ProductDetails />
      </main>
      <Footer />
    </>
  );
}

export default Product;
