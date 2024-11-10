import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
// import ProductDetails from "../../components/ProductDetails/ProductDetails";
import DetalhesProduto from "../../components/ProductDetails/DetalhesProduto";

function Product() {
  return (
    <>
      <Header />
      <main>
        <DetalhesProduto />
      </main>
      <Footer />
    </>
  );
}

export default Product;
