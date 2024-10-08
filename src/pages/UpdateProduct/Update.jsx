import styled from "styled-components";
import React, { useState } from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import  { findProductByName } from "../../services/ProductService";


const Container = styled.div`
  flex: 2;
  width: 800px;
`


const SearchBar = styled.div`
  margin: auto;
  text-align: center;
  `

const ShowProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    width: 90%;
    height: 500px;
    margin: 30px auto;
    padding: 30px;
    justify-content: center;
    gap: 25px;

    & > * {
        flex: 0 0 auto; /* Garante que os itens não crescerão ou encolherão */
    }
`


const Update = () => {

    const [textoBusca, setTextoBusca] = useState();
    const [resultadoBusca, setResultadoBusca] = useState();


    const buscarProduto = async (textoBusca) => {
      let resultado = await findProductByName(textoBusca);
      console.log(resultado);
      setResultadoBusca(resultado);
    }

    return (
        <Container>
            <SearchBar>
              <input value={textoBusca} type="text" onChange={(event) => setTextoBusca(event.target.value)}/>
              <button onClick={() => buscarProduto(textoBusca)}>Search</button>
            </SearchBar>
            <ShowProducts>
              {resultadoBusca && resultadoBusca.map((p) => {
                const produto = {
                  id: p.id,
                  name: p.nome,
                  price: p.preco,
                  rating: p.nota,
                  images: [p.images]
               }; return <ProductCard product={produto}/>;})}
            </ShowProducts>
        </Container>
    );
}

export default Update;
