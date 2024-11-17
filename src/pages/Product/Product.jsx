import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
// import ProductDetails from "../../components/ProductDetails/ProductDetails";
import DetalhesProduto from "../../components/ProductDetails/DetalhesProduto";
import { getProductDetails } from "../../services/ProductService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DotsLoader from "../../components/DotLoader/DotLoader";

function Product() {
  const { id } = useParams(); // Obtém o ID do produto da URL
  // const productId = parseInt(id); // Converte o ID para um número inteiro
  // const product = ProductsData.find((item) => item.id === productId); // Busca o produto com o ID correspondente
  const [product, setProduct] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProductDetails(id).then(result => {
        setProduct(result);
        setLoader(false);
    }).catch(error => {
        console.log("Error" + error);
        setLoader(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        {loader ? <DotsLoader /> :
        <DetalhesProduto product={product}/>}
      </main>
      <Footer />
    </>
  );
}

export default Product;
