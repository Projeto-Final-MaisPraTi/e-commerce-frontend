import styled from "styled-components";
import useRegister from "./useRegister";
import { useState } from "react";
import { submitProduct } from "../../services/ProductSubmission";
import Box from "@mui/material/Box";
import { styled as muiStyled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import PreviewProduct from "./PreviewProduct";
import { categories, opcoesDeCores } from "../../utils/ProductOptions";

// Progesso do banco de dados
const Root = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  "& > * + *": {
    // Não sei
    marginLeft: theme.spacing(3),
  },
  justifyContent: "center",
}));

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const SidePreview = styled.div`
  height: 100%;
`;

const SideForm = styled.div`
  flex: 2;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  h2 {
    text-align: center;
    margin: auto;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 50px;
  }
  .mainSelect {
    color: gray;
  }
  input {
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
  }
  label {
    margin-top: 10px;
  }
  .description {
    padding: 10px;
    width: 80%;
    height: 100px;
  }
  .img-input {
    height: 50px;
  }
  .inputColor {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }
  .loading_banco_de_dados {
    margin: auto;
    margin-top: 15px;
  }
  .button_submit {
    input[type="submit"] {
      line-height: 100%;
    }
  }
`;

const CorAtualSelecionada = styled.span`
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${(props) => props.cor};
`;

const Cor = ({ corAtual }) => <CorAtualSelecionada cor={corAtual} />;

const Register = () => {
  const { setValues, data } = useRegister();
  // Categorias
  const [category, setCategory] = useState("");
  const [progressBar, setProgressBar] = useState(null);
  const [progressInsertDB, setProgressInsertDB] = useState(null);


  // Muda a categoria selecionada
  const handleChangeCategory = (event) => {
    const selectedValue = event.target.value;
    setCategory(selectedValue);
    setValues(selectedValue, "category");
  };

  // Pega o primeiro indice para a imagem de capa
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues(reader.result, "cover");
      };
      reader.readAsDataURL(file);
    } else {
      setValues("", "cover");
    }
  };

  // Pega todas as outras imagens para o produto
  const handleFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const images = [];
      let filesRead = 0;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          images.push(reader.result);
          filesRead++;

          if (filesRead === files.length) {
            setValues(images, "img");
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      setValues("", "img");
    }
  };
  //Seleciona a cor (Precisa colocar a logica para quando o produto não tiver uma cor)
  const [corSelecionada, setCorSelecionada] = useState("#000000");


  const handleChangeColor = (event) => {
    setCorSelecionada(event.target.value);

    const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
    if (corEncontrada) {
      setValues(corEncontrada.nome, "color");
    }
  };

  // Enviar para o banco de dados
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Necessário confirmar todos os dados antes de enviar

    // União das imagens
    let imagens = [];
    imagens.push(data.cover);
    imagens = [...imagens, ...data.images.flat()];

    try {
      let result = await submitProduct(data, imagens, setProgressBar, setProgressInsertDB);
      alert("Produto cadastrado!");
      console.log(result);
    } catch (error) {
      console.error("Erro ao enviar o produto:", error);
      alert("Erro ao cadastrar o produto.");
    }
  };
  // A maioria dos inputs ainda precisam de validação

  return (
    <Container>
      <SidePreview>
        <PreviewProduct name={data.name} price={data.price} cover={data.cover} />
      </SidePreview>
      <SideForm>
        <div className="title">
          <h2>Register Product</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" onChange={(event) => setValues(event.target.value, "name")} />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <br />
            <textarea
              className="description"
              type="text"
              onChange={(event) => setValues(event.target.value, "description")}
            />
          </div>
          <div>
            <label htmlFor="">Category:</label>
            <br />
            <select name="" id="" onChange={handleChangeCategory} value={category}>
              {categories.map((cat, index) => (
                <option key={index} value={cat.value} disabled={cat.disabled}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Quantity:</label>
            <br />
            <input
              type="number"
              min={0}
              placeholder="0"
              onChange={(event) => setValues(event.target.value, "quantity")}
            />
          </div>
          <div>
            <label htmlFor="">Value:</label>
            <br />
            <input
              type="text"
              placeholder="0,00"
              onChange={(event) => setValues(event.target.value, "price")}
            />
          </div>
          <div>
            <label>Cor</label>
            <div className="inputColor">
              <select value={corSelecionada} onChange={handleChangeColor}>
                {opcoesDeCores.map((opcao, index) => (
                  <option key={index} value={opcao.valor}>
                    {opcao.nome}
                  </option>
                ))}
              </select>
              <span
                style={{
                  border: "2px solid black",
                  borderRadius: "5px",
                  padding: "15px",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  backgroundColor: corSelecionada,
                }}
              ></span>
            </div>
          </div>
          <div>
            <label htmlFor="">Cover Image:</label>
            <br />
            <input className="img-input" type="file" accept="image/*" onChange={handleFile} />
          </div>
          <div>
            <label htmlFor="">Image Details:</label>
            <br />
            <input
              className="img-input"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFiles}
            />
          </div>
          <div className="button_submit">
            <input type="submit" value={"Enviar"} />
          </div>
          {progressBar && (
            <Box sx={{ width: "100%", marginTop: "8px" }}>
              <h5>Fazendo upload das imagens</h5>
              <Root>
                <CircularProgress />
              </Root>
            </Box>
          )}
          {progressInsertDB && (
            <div className="loading_banco_de_dados">
              <h5>Fazendo upload no banco de dados</h5>
              <Root>
                <CircularProgress />
              </Root>
            </div>
          )}
        </form>
      </SideForm>
    </Container>
  );
};

export default Register;
