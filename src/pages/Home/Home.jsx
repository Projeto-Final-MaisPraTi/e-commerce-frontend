import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import FlashSales from "../../components/FlashSales/FlashSales";
import CardCategory from "./CardCategory.jsx";
import NewArrival from "../../components/NewArrival/NewArrival";

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <CardCategory />
      <NewArrival />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
