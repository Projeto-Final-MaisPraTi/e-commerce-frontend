import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import FlashSales from "../../components/FlashSales/FlashSales";
import CardCategory from "./CardCategory.jsx";

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <CardCategory />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
