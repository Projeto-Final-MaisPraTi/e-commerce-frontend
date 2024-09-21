import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import FlashSales from "../../components/FlashSales/FlashSales";
import NewArrival from "../../components/NewArrival/NewArrival";
function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <NewArrival />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
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
