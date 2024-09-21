import Header from "../../components/Header/Header";
import FlashSales from "../../components/FlashSales/FlashSales";
import BrowseByCategory from "../../components/BrowseByCategory/CardCategory";
import BestSelling from "../../components/BestSelling/BestSelling";
import NewArrival from "../../components/NewArrival/NewArrival";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import Footer from "../../components/Footer/ComponentFooter";

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <NewArrival />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
