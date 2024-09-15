import CardCategory from "./CardCategory";
import BestSelling from "./BestSelling";
import { LanguageProvider } from "../../utils/LanguageContext";
import NewArrival from "./NewArrival";

function Home() {
  return (
      <LanguageProvider>
        <CardCategory />
        <BestSelling />
        <NewArrival />
      </LanguageProvider>
  )
}

export default Home;