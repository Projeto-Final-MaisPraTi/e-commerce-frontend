import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { findProductByName, deleteProductById } from "../../services/ProductService";
import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import CardUpdateProduct from "./CardUpdateProduct";
import CircularProgressBar from "../RegisterProduct/CircularProgressBar";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Progesso do banco de dados
const Root = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  "& > * + *": {
    marginLeft: theme.spacing(3),
  },
  justifyContent: "center",
}));

const Container = styled.div`
  flex: 2;
  width: 800px;
`;

const SearchBar = styled.div`
  margin: auto;
  text-align: center;
`;

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

const Loading = styled.div`
  margin: auto;
  margin-top: 15px;
`

const PopupUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 150px;
  width: 350px;
  padding: 20px;
  border: 1px solid black;
  margin-top: 40px;
  background-color: #f0f0f0;
  border-radius: 4px;
  color: #333;
  p {
    font-weight: 400;
  }
  p span {
    color: #a00606;
    font-weight: 800;
  }
`

const ButtonsUpdate = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;
  button {
    padding: 5px 20px 5px 20px;
    border: none;
    border-radius: 5px;
  }
  .update-yes {
    background-color: #0765bd;
    color: white
  }
  .update-no {
    background-color: #e02108;
    color: white;
  }
`;

const Update = () => {
  const [textoBusca, setTextoBusca] = useState();
  const [resultadoBusca, setResultadoBusca] = useState();
  const [load, setLoad] = useState(null);
  const [notFound, setNotFound] = useState(null);
  // vai receber um objeto com (id do produto)id: , (nome do produto)nome:
  const [itemUpdate, setItemUpdate] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);


  const navigate = useNavigate();

  const handlerEditProduct = () => {
      navigate("/manager/update/" + itemUpdate['id']);
  }

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
        return;
      }
      setResultadoBusca(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const deleteProduct = async (id) => {
    let divUpdate = document.getElementById('popup_delete');
    let res;
    const root = createRoot(divUpdate);
    root.render(<CircularProgressBar />);
    try {
      res = await deleteProductById(id);
      root.render(
      <div> 
        <p>Produto excuido com sucesso !</p>
      </div>);
      await sleep(3000);
      buscarProduto(textoBusca);
    } catch (error) {
      console.log(error);
    }
    setDeleteItem(null);
    console.log(res);
  }

  return (
    <Container>
      <SearchBar>
        <input
          value={textoBusca}
          type="text"
          onChange={(event) => setTextoBusca(event.target.value)}
        />
        <button onClick={() => buscarProduto(textoBusca)}>Search</button>
      </SearchBar>
      <ShowProducts>
        {load &&
          <Loading>
            <h3>Buscando produtos</h3>
            <Root>
              <CircularProgress size={80} />
            </Root>
          </Loading>
        }
        {notFound &&
          <Loading>
            <h3>Nenhum resultado encontrado</h3>
          </Loading>
        }
        {resultadoBusca && resultadoBusca.map((p) => {
          const produto = {
            id: p.id,
            name: p.nome,
            price: p.preco,
            rating: p.nota,
            images: [p.images]
          }; return <CardUpdateProduct product={produto} update={setItemUpdate} delete={setDeleteItem}/>;
        })}
        { itemUpdate &&
        <PopupUpdate>
          <p>Deseja alterar o produto {itemUpdate['nome']} ?</p>
          <ButtonsUpdate>
            <button className="update-yes" onClick={handlerEditProduct}>Sim</button>
            <button className="update-no" onClick={() => setItemUpdate(null)}>Não</button>
          </ButtonsUpdate>
        </PopupUpdate>
        }
        { deleteItem &&
        <PopupUpdate id="popup_delete">
          <p>Deseja realmente deletar o item {deleteItem['nome']} ?</p>
          <p><span>Essa operação e irreversivel !</span></p>
          <ButtonsUpdate>
            <button className="update-yes" onClick={() => deleteProduct(parseInt(deleteItem['id']))}>Sim</button>
            <button className="update-no" onClick={() => setDeleteItem(null)}>Não</button>
          </ButtonsUpdate>
        </PopupUpdate>
        }
      </ShowProducts>
    </Container>
  );
};

export default Update;
