import styled from "styled-components";
import React, { useState } from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import { findProductByName } from "../../services/ProductService";

import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


// Progesso do banco de dados
const Root = muiStyled(Box)(({ theme }) => ({
  display: 'flex',
  '& > * + *': {
    marginLeft: theme.spacing(3),
  },
  justifyContent: 'center'
}));


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
    .loading{
    margin: auto;
    margin-top: 15px;
  }
`


const Update = () => {

  const [textoBusca, setTextoBusca] = useState();
  const [resultadoBusca, setResultadoBusca] = useState();
  const [load, setLoad] = useState(null);
  const [notFound, setNotFound] = useState(null);


  const buscarProduto = async (textoBusca) => {
    setResultadoBusca(null);
    setNotFound(null);
    let resultado;
    try {
      setLoad(true);
      resultado = await findProductByName(textoBusca);
      setLoad(false);
      if (resultado.length == 0) {
        setNotFound(true);
        return ;
      }
      setResultadoBusca(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Container>
      <SearchBar>
        <input value={textoBusca} type="text" onChange={(event) => setTextoBusca(event.target.value)} />
        <button onClick={() => buscarProduto(textoBusca)}>Search</button>
      </SearchBar>
      <ShowProducts>
        {load &&
          <div className="loading">
            <h3>Buscando produtos</h3>
            <Root>
              <CircularProgress size={80}/>
            </Root>
          </div>
        }
        {notFound &&
          <div className="loading">
            <h3>Nenhum resultado encontrado</h3>
          </div>
        }
        {resultadoBusca && resultadoBusca.map((p) => {
          const produto = {
            id: p.id,
            name: p.nome,
            price: p.preco,
            rating: p.nota,
            images: [p.images]
          }; return <ProductCard product={produto} />;
        })}
      </ShowProducts>
    </Container>
  );
}

export default Update;
