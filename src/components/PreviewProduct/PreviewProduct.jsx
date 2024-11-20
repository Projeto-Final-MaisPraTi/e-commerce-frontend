import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const Container = styled.div`
  width: 300px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  pointer-events: none;
  h2 {
    text-align: center;
  }
  .product {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 500px){
    padding: 10px 0px;
    margin: auto;
    width: 100%;
  }
`;

const StyProduct = styled(ProductCard)`
  margin: auto;
  align-items: center;
  background-color: black;
  margin-right: 0;
  width: 100%;
`;

const PreviewProduct = ({ name, price, cover }) => {
  let product = {};

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  product["name"] = name;
  product["price"] = price ? formatCurrency(String(price).replace(',','.')) : "R$ 999.99";
  let array;
  if (!cover || cover == false) {
    array = null;
  } else {
    let urlImg;
    if (cover instanceof File) {
      urlImg = URL.createObjectURL(cover);
    } else {
      urlImg = cover;
    }
    array = [urlImg];
  }
  product["images"] = array;
  product["discount"] = 0;

  return (
    <Container>
      <div>
        <h2>Pré-visualização</h2>
      </div>
      <div className="product">
        <StyProduct product={product} />
      </div>
    </Container>
  );
};

export default PreviewProduct;
