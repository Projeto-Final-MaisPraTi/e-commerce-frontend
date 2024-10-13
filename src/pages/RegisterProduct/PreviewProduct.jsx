import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";
// import produtos from "../../utils/ProductsData";

const Container = styled.div`
  width: 300px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  padding: 10px;
  h2 {
    text-align: center;
  }
  .product {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
  }
`;

const StyProduct = styled(ProductCard)`
  margin: auto;
  align-items: center;
  background-color: black;
  margin-right: 0;
  width: 100%;
`;

const PreviewProduct = ({name, price, cover}) => {

  let product = {};

  product["name"] = name;
  product["price"] = price ? `${price}`.replace(",", ".") : "999.99";
  let array = [cover];
  product["images"] = array;

  console.log(price);
  return (
    <Container>
      <div>
        <h2>Preview</h2>
      </div>
      <div className="product">
        <StyProduct product={product} />
      </div>
    </Container>
  );
};

export default PreviewProduct;
