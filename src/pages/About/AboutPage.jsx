import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import OurHistory from "../../components/About/ourHistory.jsx";
import BoxList from "../../components/About/boxList.jsx";
import ProfileList from "../../components/About/ProfileList.jsx";
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';

function About() {
  return (
    <>
      <Header />
      <OurHistory />
      <BoxList />
      < ProfileList />
      < FeaturesSection />
      <Footer />
    </>
  );
}

export default About;
