import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import ShoppingCart from "../../components/Cart/ShoppingCart";

function CartPage() {
  return (
    <>
      <Header />
      <main>
        <ShoppingCart />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
