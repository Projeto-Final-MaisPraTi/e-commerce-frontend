import Header from "../../components/Header/Header";
import FlashSales from "../../components/FlashSales/FlashSales";
import BrowseByCategory from "../../components/BrowseByCategory/CardCategory";
import BestSelling from "../../components/BestSelling/BestSelling";
import ExploreProducts from "../../components/ExploreProducts/ExploreProducts";
import NewArrival from "../../components/NewArrival/NewArrival";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import Footer from "../../components/Footer/ComponentFooter";
import DividingLine from "../../components/DividingLine/DividingLine.jsx";
import CategoryCarousel from "../../components/categoryWithCarousel/CategoryWithCarousel.jsx";

function Home() {
  return (
    <>
      <Header />
      <CategoryCarousel/>
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
