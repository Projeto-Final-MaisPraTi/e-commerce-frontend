import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import FlashSales from "../../components/FlashSales/FlashSales";
import CardCategory from "./CardCategory.jsx";
import BestSelling from "./BestSelling.jsx";
import ExploreProducts from "./ExploreProducts.jsx";

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <CardCategory />
      <BestSelling />
      <ExploreProducts />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
