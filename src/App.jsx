import './styles.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
// import Buttons from './components/buttons/Buttons.jsx';
import Footer from './components/Footer/ComponentFooter.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <>
      <Header />
      {/* <h1>Hello World</h1>
      <Buttons type={1} text={'add to cart type 1'} />
      <Buttons type={2} text={'buy now type 2'} />
      <Buttons type={3} text={'add to wishlist type 3'} /> */}
      <ProductDetails
        productName={'Havic HV G-92 Gamepad'}
        price={192.0}
        quantity={2}
      />
      <Footer />
    </>
  );
}

export default App;
