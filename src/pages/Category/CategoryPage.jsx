import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import Category from "../../components/Category/Category";
import { useParams } from "react-router-dom";
import { getFilteredProducts } from "../../services/ProductService";
import { useEffect, useState } from "react";

function CategoryPage() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  const filterCategory = {
    categoria: category
  }

  useEffect(() => {
    if (!category) {
      getFilteredProducts(filterCategory, null, 5).then(result => {
        setData(result.content);
        console.log(result);
      });
    } else {
      getFilteredProducts(filterCategory).then(result => {
        setData(result.content);
        console.log(result);
      })
    }}, []);

return (
  <>
    <Header />
    <Category selectedCategory={data} />
    <Footer />
  </>
);
}

export default CategoryPage;
