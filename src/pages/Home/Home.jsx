import Header from "../../components/Header/Header.jsx";
import FlashSales from "../../components/FlashSales/FlashSales.jsx";
import BrowseByCategory from "../../components/BrowseByCategory/CardCategory.jsx";
import BestSelling from "../../components/BestSelling/BestSelling.jsx";
import ExploreProducts from "../../components/ExploreProducts/ExploreProducts.jsx";
import NewArrival from "../../components/NewArrival/NewArrival.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import Footer from "../../components/Footer/ComponentFooter.jsx";
import DividingLine from "../../components/DividingLine/DividingLine.jsx";

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <DividingLine />
      <BrowseByCategory />
      <DividingLine />
      <BestSelling />
      <DividingLine />
      <ExploreProducts />
      <DividingLine />
      <NewArrival />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
