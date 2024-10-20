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
  const [textoBusca, setTextoBusca] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState();
  const [load, setLoad] = useState(null);
  const [notFound, setNotFound] = useState(null);
  // vai receber um objeto com (id do produto)id: , (nome do produto)nome:
  const [itemUpdate, setItemUpdate] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);


  const navigate = useNavigate();

  // AO CLICAR NO ICONE DE EDIÇÃO E REDIRECIONADO PARA OUTRA PAGINA QUE E CARREGADA TODAS AS INFORMAÇÕES DO PRODUTO PARA EDIÇÃO
  const handlerEditProduct = () => {
      navigate("/manager/update/" + itemUpdate['id']);
  }

  // FUNÇÃO PARA BUSCAR O PRODUTO COM O TEXTO INSERIDO
  const buscarProduto = async (textoBusca) => {
    // SE JA TIVER OUTRA BUSCA FINALIZA ELA
    setResultadoBusca(null);
    setNotFound(null);
    let resultado;
    try {
      // FAZ O LOADING APARECER NA TELA
      setLoad(true);
      // FAZ A BUSCA NO BANCO PELO NOME DO PRODUTO USANDO ILIKE
      resultado = await findProductByName(textoBusca);
      // REMOVE O LOADING DA TELA
      setLoad(false);
      // SE O RESUTADO ESTIVER VAZIO ENTÃO O PRODUTO NÃO FOI ENCONTRADO
      if (resultado.length == 0) {
        setNotFound(true);
        return;
      }
      // SE NÃO A VARIAVEL ONDE OS PRODUTOS FICAR E SETADA COM O RESULTADO E OS PRODUTOS SÃO REDENRIZADOS NA TELA
      setResultadoBusca(resultado);
    } catch (error) {
      alert("Erro ao buscar o produto");
      setNotFound(true);
      console.log(error);
    }
  };

  // FUNÇÃO PARA REPRODUZIR O SLEEP (UMA PAUSA)
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // DELETA O PRODUTO IMEDIATAMENTE
  const deleteProduct = async (id) => {
    let divUpdate = document.getElementById('popup_delete');
    let res;
    // TENTA REESCREVER O QUE TEM DENTRO DA DIV DE POPUP
    const root = createRoot(divUpdate);
    root.render(<CircularProgressBar />);
    try {
      res = await deleteProductById(id);
      root.render(
      <div> 
        <p>Produto excuido com sucesso !</p>
      </div>);
      // DA UMA PAUSA PARA MOSTRAR O QUE FOI REDENRIZADO DENTRO DO POPUP
      await sleep(3000);
      // FAZ NOVAMENTE A BUSCA ANTERIOR PARA MOSTRAR OS MESMOS PRODUTOS MAS SEM O PRODUTO DELETADO
      buscarProduto(textoBusca);
    } catch (error) {
      alert("Falha ao deletar o produto!")
      console.log(error);
    }
    // FECHA O POPUP DE DELETAR O PRODUTO
    setDeleteItem(null);
    console.log(res);
  }

  return (
    <Container>
      {/* BARRA DE PERQUISA */}
      <SearchBar>
        <input
          value={textoBusca}
          type="text"
          onChange={(event) => setTextoBusca(event.target.value)}
        />
        {/* AO CLICAR EM BUSCAR E CHAMADA UM FUNÇAO PARA BUSCAR OS PRODUTOS NO BANCO E COLOCAR TODOS OS PRODUTOS ENCONTRADOS EM UMA VARIAVEL */}
        <button onClick={() => buscarProduto(textoBusca)}>Search</button>
      </SearchBar>
      {/* QUADRANTE ONDE E MOSTRADO O RESUTADO DE UMA BUSCA */}
      <ShowProducts>
        {/* ENQUANTO ESTA BUCANDO O PRODUTO MOSTAR UM ICONE DE LOADING */}
        {load &&
          <Loading>
            <h3>Buscando produtos</h3>
            <Root>
              <CircularProgress size={80} />
            </Root>
          </Loading>
        }
        {/* SE O PRODUTO NÃO FOR ENCONTRARDO MOSTRAR NA TELA QUE O PRODUTO NÃO FOI ENCONTRADO */}
        {notFound &&
          <Loading>
            <h3>Nenhum resultado encontrado</h3>
          </Loading>
        }
        {/* MOSTRAR RESULTADO DA BUSCA DE PRODUTOS */}
        {resultadoBusca && resultadoBusca.map((p) => {
          const produto = {
            id: p.id,
            name: p.nome,
            price: p.preco,
            rating: p.nota,
            images: [p.images]
          }; return <CardUpdateProduct product={produto} update={setItemUpdate} delete={setDeleteItem}/>;
        })}
        {/* ATUALIZAÇÕES DO PRODUTO, DELETAR OU EDITAR */}
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
