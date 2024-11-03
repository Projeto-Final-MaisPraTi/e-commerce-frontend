import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { findProductByName, deleteProductById } from "../../services/ProductService";
import CardUpdateProduct from "./CardUpdateProduct";
import LoadingSpinner from '../../components/SpinnerComponent/LoadingSpinner';
import { categories } from '../../utils/ProductOptions';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getFilteredProducts } from '../../services/ProductService';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  border-radius: 5px;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  label {
    margin-right: 8px;
    font-size: 18px;
    margin-bottom: 0;
  }
  input {
    padding: 5px;
  }
  button {
    margin-left: 15px;
    height: 100%;
    border: none;
    padding: 0 15px;
    border-radius: 5px;
    color: white;
    background-color: dodgerblue;

    &:hover {
      background-color: #3a9afa;
    }
  }
`


const SelectCategorie = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

const SearchInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
  select {
    height: 100%;
  }
  
`

const ShowProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  background-color: #F3F3F3;
  width: 100%;
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
  const [resultadoBusca, setResultadoBusca] = useState(false);
  const [load, setLoad] = useState(null);
  const [notFound, setNotFound] = useState(null);
  // vai receber um objeto com (id do produto)id: , (nome do produto)nome:
  const [itemUpdate, setItemUpdate] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [filtros, setFiltros] = useState({});

  const handleFiltros = (key, value) => {
    setFiltros((prevFiltros) => {
      const novosFiltros = {...prevFiltros};

      if (value) {
        novosFiltros[key] = value;
      } else {
        delete novosFiltros[key];
      }
      return novosFiltros;
    })
  }


  const navigate = useNavigate();

  // AO CLICAR NO ICONE DE EDIÇÃO E REDIRECIONADO PARA OUTRA PAGINA QUE E CARREGADA TODAS AS INFORMAÇÕES DO PRODUTO PARA EDIÇÃO
  const handlerEditProduct = () => {
      navigate("/manager/update/" + itemUpdate['id']);
  }

  const handleChangeCategory = (event) => {
    const selectedValue = event.target.value == "" ? false : event.target.value;
    setCategoria(selectedValue);
    handleFiltros("categoria", selectedValue);
    console.log(categoria);
  };

  // FUNÇÃO PARA BUSCAR O PRODUTO COM O TEXTO INSERIDO
  const buscarProduto = async () => {
    // SE JA TIVER OUTRA BUSCA, FINALIZA ELA
    setResultadoBusca(null);
    setNotFound(null);
    let resultado;
    try {
      // FAZ O LOADING APARECER NA TELA
      setLoad(true);
      // FAZ A BUSCA NO BANCO PELO NOME DO PRODUTO USANDO ILIKE
      resultado = await getFilteredProducts(filtros);
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
    root.render(<LoadingSpinner />);
    try {
      res = await deleteProductById(id);
      root.render(
      <div> 
        <p>Produto excuido com sucesso !</p>
      </div>);
      // DA UMA PAUSA PARA MOSTRAR O QUE FOI REDENRIZADO DENTRO DO POPUP
      await sleep(3000);
      // FAZ NOVAMENTE A BUSCA ANTERIOR PARA MOSTRAR OS MESMOS PRODUTOS MAS SEM O PRODUTO DELETADO
      buscarProduto();
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
        <SearchInput>
          <div>
            <label>Nome:</label>
            <input
              value={filtros.nome ? filtros.nome : ""}
              type="text"
              onChange={(event) => handleFiltros("nome", event.target.value)}
              />
          </div>
          <SelectCategorie>
            <label>Categoria:</label>
              <select name="" id="" onChange={handleChangeCategory} value={categoria}>
              <option value="">Todas</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.value} disabled={cat.disabled}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </SelectCategorie>
          </SearchInput>
        {/* AO CLICAR EM BUSCAR E CHAMADA UM FUNÇAO PARA BUSCAR OS PRODUTOS NO BANCO E COLOCAR TODOS OS PRODUTOS ENCONTRADOS EM UMA VARIAVEL */}
        <button onClick={buscarProduto}>Buscar</button>
      </SearchBar>
      {/* QUADRANTE ONDE E MOSTRADO O RESUTADO DE UMA BUSCA */}
      <ShowProducts>
        {/* ENQUANTO ESTA BUCANDO O PRODUTO MOSTAR UM ICONE DE LOADING */}
        {load &&
          <Loading>
            <h3>Buscando produtos</h3>
            <LoadingSpinner size={80}/>
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
          }; return <CardUpdateProduct key={p.id} product={produto} update={setItemUpdate} delete={setDeleteItem}/>;
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
