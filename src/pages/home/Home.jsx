import CategoryCarousel from "../../components/categoryWithCarousel/CategoryWithCarousel.jsx";
import Header from "../../components/Header/Header.jsx";
import FlashSales from "../../components/FlashSales/FlashSales.jsx";
import BrowseByCategory from "../../components/BrowseByCategory/CardCategory.jsx";
import BestSelling from "../../components/BestSelling/BestSelling.jsx";
import ExploreProducts from "../../components/ExploreProducts/ExploreProducts.jsx";
import NewArrival from "../../components/NewArrival/newarrival.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import Footer from "../../components/Footer/ComponentFooter.jsx";

function Home() {
  // throw new Error("Teste de erro");
  return (
    <>
      <Header />
      <CategoryCarousel />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <ExploreProducts />
      <NewArrival />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
