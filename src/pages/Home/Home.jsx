import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import FlashSales from "../../components/FlashSales/FlashSales";
function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
