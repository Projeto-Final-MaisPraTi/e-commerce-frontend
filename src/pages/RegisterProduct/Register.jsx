import styled from "styled-components";
import useRegister from "./useRegister";
import React, { useState } from "react";
import { submitProduct } from "../../services/ProductSubmission";
import Box from "@mui/material/Box";
import PreviewProduct from "../../components/PreviewProduct/PreviewProduct";
import { categories, opcoesDeCores } from "../../utils/ProductOptions";
import LoadingSpinner from "../../components/SpinnerComponent/LoadingSpinner";
import CardUpdateImage from "../UpdateProduct/CardUpdateImage";

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
  background-color: white;
  border-radius: 5px;
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
      border: none;
      border-radius: 5px;
      color: white;
      background-color: dodgerblue;

      &:hover {
        background-color: #3a9afa;
      }
    }
    margin-top: 10px;
  }
`;

const ImageCover = styled.div`
    display: flex;
    height: 320px;
    width: 300px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    margin: auto;
`

const ImageDetails = styled.div`
    display: flex;
    height: 300px;
    width: 90%;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: auto;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 10px;
    `

const UploadFile = styled.div`
    
`

const ContainerAddImage = styled.div`
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    width: 200px;
    height: 250px;
    border-radius: 5px;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopUpDeleteImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    width: 350px;
    height: 150px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    p{
        font-weight: 400;

    }
    p span {
    color: #a00606;
    font-weight: 700;
    font-size: 15px;
    }
`

const ButtonsDeleteImage = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;
  button {
    padding: 5px 20px 5px 20px;
    border: none;
    border-radius: 5px;
  }
  .yes {
    background-color: #0765bd;
    color: white
  }
  .no {
    background-color: #e02108;
    color: white;
  }
`;

const InputArea = styled.input`
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
`

const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px auto 5px auto;
    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 0px;
    }
    input {
        margin-left: 10px;
        width: 18px;
        height: 18px;
        padding: 0;
    }
    span {
        color: gray;
        font-size: 15px;
        margin-left: 5px;
    }
`

const UploadImageDetails = styled.div`
  
`

const Register = () => {
  const { setValues, data } = useRegister();
  // Categorias
  const [category, setCategory] = useState("");
  const [progressBar, setProgressBar] = useState(null);
  const [progressInsertDB, setProgressInsertDB] = useState(null);
  const [deleteCoverImage, setDeleteCover] = useState(false);
  const [deleteImage, setDeleteImage] = useState(false);

  // Muda a categoria selecionada
  const handleChangeCategory = (event) => {
    const selectedValue = event.target.value;
    setCategory(selectedValue);
    setValues(selectedValue, "category");
  };

  const handleDeleteCover = () => {
    setValues("", "cover");
    setDeleteCover(false);
  }

  const handleDeleteImageDetails = () => {
    console.log("Cheguei");
    console.log(deleteImage);
    if (data.images != null) {
        console.log(data.images);
        const updatedImages = data.images.filter(image => image.name !== deleteImage.name);
        if (updatedImages.length === 0) {
          setValues([], "img");
        } else {
          setValues(updatedImages, "img");
        }
    }
    setDeleteImage(false);
}

  // Pega o primeiro indice para a imagem de capa
  const handleCoverFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues(file, "cover");
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setValues(reader.result, "cover");
      // };
      // reader.readAsDataURL(file);
    } else {
      setValues("", "cover");
    }
  };

  // Pega todas imagens de detalhes para o produto
  const handleFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const images = [];
      console.log("Lista");
      Array.from(files).forEach(file => {
        images.push(file)
      });
      let newImgs = [...data.images, ...images];
      setValues(newImgs, "img");
      console.log(data.images);
    }
  };
  
  //Seleciona a cor (Precisa colocar a logica para quando o produto não tiver uma cor)
  const [corSelecionada, setCorSelecionada] = useState("#000000");

  const handleChangeColor = (event) => {
    setCorSelecionada(event.target.value);

    const corEncontrada = opcoesDeCores.find(
      (opcao) => opcao.valor === event.target.value
    );
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
    console.log(data);
    try {
      let result = await submitProduct(
        data,
        imagens,
        setProgressBar,
        setProgressInsertDB
      );
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
        <PreviewProduct
          name={data.name}
          price={data.price}
          cover={data.cover}
        />
      </SidePreview>
      <SideForm>
        <div className="title">
          <h2>Registrar Produto</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nome:</label>
            <br />
            <input
              type="text"
              onChange={(event) => setValues(event.target.value, "name")}
            />
          </div>
          <div>
            <label htmlFor="">Descrição:</label>
            <br />
            <textarea
              className="description"
              type="text"
              onChange={(event) => setValues(event.target.value, "description")}
            />
          </div>
          <div>
            <label htmlFor="">Categoria:</label>
            <br />
            <select
              name=""
              id=""
              onChange={handleChangeCategory}
              value={category}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat.value} disabled={cat.disabled}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Quantidade:</label>
            <br />
            <input
              type="number"
              min={0}
              placeholder="0"
              onChange={(event) => setValues(event.target.value, "quantity")}
            />
          </div>
          <div>
            <label htmlFor="">Preço:</label>
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
            <div>
              <label >Imagem de capa:</label>
            </div>
            <ImageCover >
              {data.cover ?
                <CardUpdateImage url={data.cover} deleteImage={setDeleteCover} />
                :
                <UploadFile>
                  <label htmlFor="upload-button" style={{ cursor: 'pointer' }}>
                    <ContainerAddImage>
                      <ImageWrapper>
                        <span>Adicionar imagem</span>
                      </ImageWrapper>
                    </ContainerAddImage>
                  </label>
                  <InputArea
                    id="upload-button"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleCoverFile}
                  />
                </UploadFile>
              }
              {deleteCoverImage &&
                <PopUpDeleteImage>
                  <p>Deseja remover esta imagem ?</p>
                  <ButtonsDeleteImage>
                    <button type="button" className="yes" onClick={handleDeleteCover}>Sim</button>
                    <button type="button" className="no" onClick={() => setDeleteCover(false)}>Não</button>
                  </ButtonsDeleteImage>
                </PopUpDeleteImage>
              }
            </ImageCover>
          </div>
          {/* <div>
            <label htmlFor="">Imagem de capa:</label>
            <br />
            <input
              className="img-input"
              type="file"
              accept="image/*"
              onChange={handleCoverFile}
            />
          </div> */}
          <UploadImageDetails>
            <SelectBox>
              <label>Imagem de detalhes:</label>
            </SelectBox>
            <ImageDetails>
              {data.images && data.images.map((img, index) => <CardUpdateImage key={`Image${index}`} url={img} deleteImage={setDeleteImage} />)}
              <UploadFile>
                <label htmlFor="upload-button-details" style={{ cursor: 'pointer' }}>
                  <ContainerAddImage>
                    <ImageWrapper>
                      <span>Adicionar imagem</span>
                    </ImageWrapper>
                  </ContainerAddImage>
                </label>
                <InputArea
                  id="upload-button-details"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFiles}
                  multiple
                />
              </UploadFile>
              {deleteImage &&
                <PopUpDeleteImage>
                  <p>Deseja remover esta imagem ?</p>
                  <ButtonsDeleteImage>
                    <button type="button" className="yes" onClick={handleDeleteImageDetails}>Sim</button>
                    <button type="button" className="no" onClick={() => setDeleteImage(false)}>Não</button>
                  </ButtonsDeleteImage>
                </PopUpDeleteImage>
              }
            </ImageDetails>
          </UploadImageDetails>
          {/* <div>
            <label htmlFor="">Imagem dos detalhes:</label>
            <br />
            <input
              className="img-input"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFiles}
            />
          </div> */}
          <div className="button_submit">
            <input type="submit" value={"Enviar"} />
          </div>
          {progressBar && (
            <Box sx={{ width: "100%", marginTop: "8px" }}>
              <h5>Fazendo upload das imagens</h5>
              <LoadingSpinner />
            </Box>
          )}
          {progressInsertDB && (
            <div className="loading_banco_de_dados">
              <h5>Fazendo upload no banco de dados</h5>
              <LoadingSpinner />
            </div>
          )}
        </form>
      </SideForm>
    </Container >
  );
};

export default Register;
