import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import Category from "../../components/Category/Category";
import { useParams } from "react-router-dom";
import { getFilteredProducts } from "../../services/ProductService";
import { useEffect, useState } from "react";
import DotsLoader from "../../components/DotLoader/DotLoader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`

function CategoryPage() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const filterCategory = {
    categoria: category
  }

  useEffect(() => {
    if (!category) {
      getFilteredProducts(filterCategory, null, 5).then(result => {
        setData(result.content);
        setLoad(false)
      });
    } else {
      getFilteredProducts(filterCategory).then(result => {
        setData(result.content);
        setLoad(false);
      }).catch(error => {
        console.log("Error " + error);
        setLoad(false);
      })
    }}, []);

return (
  <>
    <Header />
      {load ?
      <Container>
        <DotsLoader /> 
      </Container>
        :
      <Category selectedCategory={data} />}
    <Footer />
  </>
);
}

export default CategoryPage;
