import styled from "styled-components";
import useRegister from "./useRegister";
import { useState } from "react";
import { submitProduct } from "../../services/ProductSubmission";
import Box from "@mui/material/Box";
import PreviewProduct from "../../components/PreviewProduct/PreviewProduct";
import { categories, opcoesDeCores } from "../../utils/ProductOptions";
import LoadingSpinner from "../../components/SpinnerComponent/LoadingSpinner";
import InputRegisterName from "../../components/ManagerProducts/Register/InputRegisterName";
import InputRegisterDescription from "../../components/ManagerProducts/Register/InputRegisterDescription";
import InputRegisterCategory from "../../components/ManagerProducts/Register/InputRegisterCategory";
import InputRegisterPrice from "../../components/ManagerProducts/Register/InputRegisterPrice";
import InputRegisterQuantity from "../../components/ManagerProducts/Register/InputRegisterQuantity";
import InputRegisterColors from "../../components/ManagerProducts/Register/InputRegisterColors";
import InputRegisterCover from "../../components/ManagerProducts/Register/InputRegisterCover";
import InputRegisterAddImagesDetails from "../../components/ManagerProducts/Register/InputRegisterAddImagesDetails";

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 500px){
    flex-direction: column;
  }
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
  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
      margin-top: 0px;
      padding: 0px;
    }
  }
`;

const Register = () => {
  const { setValues, data } = useRegister();
  // Categorias
  const [category, setCategory] = useState("");
  const [corSelecionada, setCorSelecionada] = useState("#000000");
  const [progressBar, setProgressBar] = useState(null);
  const [progressInsertDB, setProgressInsertDB] = useState(null);
  const [deleteCoverImage, setDeleteCover] = useState(false);
  const [deleteImage, setDeleteImage] = useState(false);

  // Muda a categoria selecionada
  const handleChangeCategory = (event) => {
    const selectedValue = event.target.value;
    setCategory(selectedValue);
    setValues("category", selectedValue);
  };

  const handleDeleteCover = () => {
    setValues("cover", "");
    setDeleteCover(false);
  };

  const handleDeleteImageDetails = () => {
    if (data.images != null) {
      console.log(data.images);
      const updatedImages = data.images.filter((image) => image.name !== deleteImage.name);
      setValues("img", updatedImages);
    }
    setDeleteImage(false);
  };

  // Pega o primeiro indice para a imagem de capa
  const handleCoverFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues("cover", file);
    } else {
      setValues("cover", "");
    }
  };

  // Pega todas imagens de detalhes para o produto
  const handleFiles = (event) => {
    const files = event.target.files;
    if (files) {
      const images = [];
      Array.from(files).forEach((file) => {
        images.push(file);
      });
      let newImgs = [...data.images, ...images];
      setValues("img", newImgs);
    }
  };

  //Seleciona a cor

  const handleChangeColor = (event) => {
    setCorSelecionada(event.target.value);

    const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
    if (corEncontrada) {
      setValues("color", corEncontrada.nome);
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
          <h2>Registrar Produto</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <InputRegisterName handleChange={setValues} />
          <InputRegisterDescription product={data} handleChange={setValues} />
          <InputRegisterCategory product={data} handleCategory={handleChangeCategory} />
          <InputRegisterQuantity product={data} handleChange={setValues} />
          <InputRegisterPrice product={data} handleChange={setValues} />
          <InputRegisterColors corSelect={corSelecionada} handleChange={handleChangeColor} />
          <InputRegisterCover
            product={data}
            deleteCoverImage={deleteCoverImage}
            setDeleteCover={setDeleteCover}
            handleDeleteCover={handleDeleteCover}
            handleAddCoverImage={handleCoverFile}
          />
          <InputRegisterAddImagesDetails
            product={data}
            setDeleteImage={setDeleteImage}
            handleAddImages={handleFiles}
            deleteImage={deleteImage}
            handleDeleteImageDetails={handleDeleteImageDetails}
          />
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
    </Container>
  );
};

export default Register;
