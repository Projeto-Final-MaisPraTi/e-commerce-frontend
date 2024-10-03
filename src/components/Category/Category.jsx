import Products from "../../utils/ProductsData";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

const CategoryMain = styled.main`
  width: 80vw;
  margin: 15px 10vw;
  text-align: center;
`;
const ProductBox = styled.div`
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    cursor: pointer;
    box-shadow: 0 0 5px #00000078;
    p {
      font-weight: bold;
    }
  }
  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
    padding: 3px;
  }
`;
const NoDiscountPrice = styled.p`
  color: red;
`;
const Discount = styled.span`
  padding: 3px;
  border-radius: 4px;
  background-color: red;
  color: white;
`;
const DiscountPrice = styled.p`
  color: green;
`;

function Category({ selectedCategory }) {
  const location = useLocation(); // Hook para acessar o state
  let selectedElements = [];

  // Se houver produtos passados via state, exibi-los
  if (location.state && location.state.products) {
    selectedElements = location.state.products;
  } else {
    // Caso contrário, continue com a lógica de categoria selecionada
    for (let i = 0; i < Products.length; i++) {
      if (Products[i].category == selectedCategory) {
        selectedElements.push(Products[i]);
      }
    }
  }

  return (
    <CategoryMain className="container">
      <div className="row g-0 justify-content-center">
        <h2>{selectedCategory}</h2>
        {selectedElements.map((product) => (
          <ProductBox key={product.id} className="col-12 my-5 col-md-3 m-md-5">
            <img src={product.images[0]} alt="" />
            <h4>{product.name}</h4>
            {product.discount == 0 ? (
              <p>R${product.price}</p>
            ) : (
              <>
                <NoDiscountPrice>
                  De: <del>R${product.price}</del> <Discount>{product.discount}% off</Discount>
                </NoDiscountPrice>
                <DiscountPrice>
                  Para: R${(product.price - (product.price / 100) * product.discount).toFixed(2)}
                </DiscountPrice>
              </>
            )}
          </ProductBox>
        ))}
      </div>
    </CategoryMain>
  );
}

export default Category;
