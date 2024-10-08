import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import Category from "../../components/Category/Category";
import { useParams } from 'react-router-dom';
function CategoryPage() {
  const { category } = useParams();
  
  return (
    <>
      <Header />
      <Category selectedCategory={category}/>
      <Footer />
    </>
  );
}

export default CategoryPage;