import styled from "styled-components";
import { useParams } from "react-router-dom";
import { findProductById } from "../../services/ProductService";
import React, { useEffect, useState } from "react";
import CircularProgressBar from "../RegisterProduct/CircularProgressBar";
import PreviewProduct from "../RegisterProduct/PreviewProduct";
import CurrencyInput from 'react-currency-input-field';
import CardUpdateImage from "./CardUpdateImage";
import { deleteImageByUrl, addCoverImage } from "../../services/ImageService";
import { deleteImagesFirebase } from "../../services/DeleteImageFirebase";
import { uploadImage } from "../../services/UploadImageService";
import { categories, opcoesDeCores } from "../../utils/ProductOptions";

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 30px auto;
  padding: 30px;
  gap: 20px;
  transition: 0.3s;
`;

const WaitProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    margin: auto;
`
const SidePreview = styled.div`
    padding: 0 10px;
`

const SideForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    width: 100%;
    .title {
        text-align: center;
        margin-top: 20px;
    }
    form{
        text-align: center;
        width: 100%;
        label {
            margin-top: 10px;
        }
        .description {
            padding: 10px;
            width: 80%;
            height: 100px;
        }
        .button_submit {
            margin-top: 10px;
            input[type="submit"] {
            line-height: 100%;
         }
    }
    input {
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
    }
}
`

const InputArea = styled.div`
    display: flex;
    justify-content: center;
`

const OptionColors = styled.div`
    
`

const SelectColor = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`

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


function UpdateProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState(999.99);

    const [images, setImages] = useState();
    const [cor, setCor] = useState('Preto');

    const [descricao, setDescricao] = useState();
    const [estoque, setEstoque] = useState();
    const [newImages, setNewImages] = useState();

    const [cover, setCover] = useState();


    const [deleteImage, setDeleteImage] = useState(false);
    const [deleteCoverImage, setDeleteCover] = useState(false);


    // ADICIONA IMAGEM PARA OS DETALHES

    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            if (newImages) {
                setNewImages([...newImages, newImageUrl]);
            } else {
                setNewImages([newImageUrl]);
            }
            console.log(newImages);
            product.images = [...product.images, newImageUrl];
        }
    };

    
    // ADICIONAR NOVA CAPA NO BANCO

    const handleAddCoverInDB = async (image) => {
        let url;
        try {
            url = await uploadImage(image);
            console.log(url);
            await addCoverImage(product.id, url);
            setCover(url);
        } catch (error) {
            console.log(error)
            return ;
        }
    }

    // ADICIONA IMAGEM DE CAPA


    // const handleFile = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         setValues(reader.result, "cover");
    //       };
    //       reader.readAsDataURL(file);
    //     } else {
    //       setValues("", "cover");
    //     }
    //   };
    

    
    
    const handleAddCoverImage = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleAddCoverInDB(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // DELETAR A IMAGEM DE CAPA //

    const getNameImage = (imageUrl) => {
        const url = imageUrl;
        // Extrair o nome da imagem
        const imageName = decodeURIComponent(url.split('/').pop().split('?')[0]);
        return (imageName);
    }

    const handleDeleteCover = async () => {
        // let nameImage = getNameImage(cover);
        // let url = cover;

        // await deleteImageByUrl(url);
        // await deleteImagesFirebase(nameImage);
        // console.log(nameImage);
        setCover(false);
        setDeleteCover(false);
    }



    // Usado duas vezes em componetes diferentes

    const [categoria, setCategoria] = useState();



    // Muda a categoria selecionada
    const handleChangeCategory = (event) => {
        const selectedValue = event.target.value;
        setCategoria(selectedValue);
    };

    // cor 
    // também usado duas vezes em componentes diferentes

    const [corSelecionada, setCorSelecionada] = useState("#000000");

    const handleChangeColor = (event) => {
        setCorSelecionada(event.target.value);

        const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
        if (corEncontrada) {
            setCor(corEncontrada.nome);
        }
    };

    const getProduct = async (id) => {
        let product;
        try {
            product = await findProductById(id);
        } catch (error) {
            console.log(error);
            return;
        }
        return (product);
    }

    useEffect(() => {
        getProduct(id).then(result => {
            setNome(result.nome);
            setPreco(result.preco);
            setCor(result.cor);
            setDescricao(result.descricao);
            setEstoque(result.estoque);
            setCategoria(result.categoria);
            setProduct(result);
            setCover(result.images[0]);
            setImages(result.images.slice(1));
        });
        console.log(product);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    if (!product) {
        return (
            <>
                <Container>
                    <WaitProduct>
                        <CircularProgressBar size={80} />
                    </WaitProduct>
                </Container>
            </>
        );
    }

    return (
        <>
            <Container>
                <SidePreview>
                    <PreviewProduct name={nome} price={preco} cover={cover} />
                </SidePreview>
                <SideForm>
                    <div className="title">
                        <h2>Update Product</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <br />
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
                            {/* <input type="checkbox" /> */}
                        </div>
                        <div>
                            <label>Description:</label>
                            <br />
                            <textarea
                                className="description"
                                type="text"
                                value={descricao}
                                onChange={(event) => setDescricao(event.target.value)}
                            />
                            {/* <input type="checkbox" /> */}
                        </div>
                        <div>
                            <label htmlFor="">Category:</label>
                            <br />
                            <select name="" id="" onChange={handleChangeCategory} value={categoria}>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.value} disabled={cat.disabled}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <br />
                            <input
                                type="number"
                                min={0}
                                placeholder="0"
                                value={estoque}
                                onChange={(event) => setEstoque(event.target.value)}
                            />
                            {/* <input type="checkbox" /> */}
                        </div>
                        <div>
                            <label >Value:</label>
                            <br />
                            <CurrencyInput
                                value={preco}
                                placeholder="R$ 0,00"
                                decimalSeparator=","
                                groupSeparator="."
                                prefix="R$ "
                                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                                decimalsLimit={2}
                                onValueChange={(value) => {
                                    setPreco(value)
                                    console.log(value);
                                }}
                            />
                        </div>
                        <OptionColors>
                            <label>Cor</label>
                            <SelectColor>
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
                            </SelectColor>
                        </OptionColors>
                        <div>
                            <label >Cover Image:</label>
                            <br />
                            <ImageCover>
                                {cover ?
                                    <CardUpdateImage url={cover} deleteImage={setDeleteCover} />
                                    :
                                    <UploadFile>
                                        <label htmlFor="upload-button" style={{ cursor: 'pointer' }}>
                                            <ContainerAddImage>
                                                <ImageWrapper>
                                                    <span>Adicionar imagem</span>
                                                </ImageWrapper>
                                            </ContainerAddImage>
                                        </label>
                                        <input
                                            id="upload-button"
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleAddCoverImage}
                                        />
                                    </UploadFile>
                                }
                                {deleteCoverImage &&
                                    <PopUpDeleteImage>
                                        <p>Deseja realmente deletar esta imagem ?</p>
                                        <p><span>A alteraçao é aplicada imediatamente</span></p>
                                        <ButtonsDeleteImage>
                                            <button className="yes" onClick={handleDeleteCover}>Sim</button>
                                            <button className="no" onClick={() => setDeleteCover(false)}>Não</button>
                                        </ButtonsDeleteImage>
                                    </PopUpDeleteImage>
                                }
                            </ImageCover>
                        </div>
                        <div>
                            <label>Image Details:</label>
                            <br />
                            <ImageDetails>
                                {images.map((img) => <CardUpdateImage url={img} deleteImage={setDeleteImage} />)}
                                <UploadFile>
                                    <label htmlFor="upload-button" style={{ cursor: 'pointer' }}>
                                        <ContainerAddImage>
                                            <ImageWrapper>
                                                <span>Adicionar imagem</span>
                                            </ImageWrapper>
                                        </ContainerAddImage>
                                    </label>
                                    <input
                                        id="upload-button"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleAddImage}
                                    />
                                </UploadFile>
                                {deleteImage &&
                                    <PopUpDeleteImage>
                                        <p>Deseja realmente deletar esta imagem ?</p>
                                        <p><span>A alteraçao é aplicada imediatamente</span></p>
                                        <ButtonsDeleteImage>
                                            <button className="yes">Sim</button>
                                            <button className="no" onClick={() => setDeleteImage(false)}>Não</button>
                                        </ButtonsDeleteImage>
                                    </PopUpDeleteImage>
                                }
                            </ImageDetails>
                        </div>
                        <div className="button_submit">
                            <input type="submit" value={"Update"} />
                        </div>
                        {/* {progressBar && (
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
                    )} */}
                    </form>
                </SideForm>
            </Container>
        </>
    );
}

export default UpdateProduct;