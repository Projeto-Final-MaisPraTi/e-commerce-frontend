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
    .disabled {
    pointer-events: none; 
    opacity: 0.5; 
    }
}
`

const InputArea = styled.input`
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
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

const Label = styled.label`
    
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


function UpdateProduct() {
    const { id } = useParams();

    const [produto, setProduto] = useState();
    const [newImages, setNewImages] = useState();
    const [deleteImage, setDeleteImage] = useState(false);
    const [deleteCoverImage, setDeleteCover] = useState(false);

    const handleChange = (key, value) => {
        setProduto(prevState => ({
            ...prevState,
            [key]: { ...prevState[key], value }
        }));
    };

    const toggleEdit = (key) => {
        setProduto(prevState => ({
            ...prevState,
            [key]: { ...prevState[key], edit: !prevState[key].edit }
        }));
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
            setProduto({
                id: id,
                nome: { value: result.nome, edit: false },
                preco: { value: result.preco, edit: false },
                cor: { value: result.cor, edit: false },
                descricao: { value: result.descricao, edit: false },
                estoque: { value: result.estoque, edit: false },
                categoria: { value: result.categoria, edit: false },
                images: { value: result.images.slice(1), edit: false },
                cover: { value: result.images[0], edit: false }
            })
        });
        console.log(product);
    }, []);



    const [product, setProduct] = useState();



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

    const handleAddCoverInFirebase = async (image) => {
        let url;
        try {
            url = await uploadImage(image);
            console.log(url);
            handleChange('cover', url);
        } catch (error) {
            console.log(error)
            return ;
        }
    }

    // ADICIONA IMAGEM DE CAPA    
    
    const handleAddCoverImage = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange('cover', reader.result);
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
        if (produto.cover.value.includes('https:')){
            let nameImage = getNameImage(produto.cover.value);
            let url = produto.cover.value;
            await deleteImageByUrl(url);
            await deleteImagesFirebase(nameImage);
            console.log(nameImage);
        }
        handleChange('cover', null);
        setDeleteCover(false);
    }


    // Muda a categoria selecionada
    const handleChangeCategory = (event) => {
        const selectedValue = event.target.value;
        handleChange('categoria', selectedValue);
    };

    // cor 
    // também usado duas vezes em componentes diferentes

    const [corSelecionada, setCorSelecionada] = useState("#000000");

    const handleChangeColor = (event) => {
        setCorSelecionada(event.target.value);

        const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
        if (corEncontrada) {
            handleChange('cor', corEncontrada.nome);
        }
    };

    

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    if (!produto) {
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
                    <PreviewProduct name={produto.nome.value} price={produto.preco.value} cover={produto.cover.value} />
                </SidePreview>
                <SideForm>
                    <div className="title">
                        <h2>Update Product</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <SelectBox>
                                <Label>Name:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('nome')}/>
                                <span>( Edit name ? )</span>
                            </SelectBox>
                            <InputArea disabled={!produto.nome.edit} type="text" value={produto.nome.value} onChange={(event) => handleChange('nome', event.target.value)} />
                        </div>
                        <div>
                            <SelectBox>
                                <Label>Description:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('descricao')}/>
                                <span>( Edit description ? )</span>
                            </SelectBox>
                            <textarea
                                className="description"
                                type="text"
                                disabled={!produto.descricao.edit}
                                value={produto.descricao.value}
                                onChange={(event) => handleChange('descricao', event.target.value)}
                            />
                        </div>
                        <div>
                        <SelectBox>
                            <Label>Category:</Label>
                            <input type="checkbox" onChange={() => toggleEdit('categoria')}/>
                            <span>( Edit category ? )</span>
                        </SelectBox>
                            <select disabled={!produto.categoria.edit} onChange={handleChangeCategory} value={produto.categoria.value}>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.value} disabled={cat.disabled}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <SelectBox>
                                <Label>Quantity:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('estoque')}/>
                                <span>( Edit quantity ? )</span>
                            </SelectBox>
                            <InputArea
                                type="number"
                                min={0}
                                disabled={!produto.estoque.edit}
                                placeholder="0"
                                value={produto.estoque.value}
                                onChange={(event) => handleChange('estoque', event.target.value)}
                            />
                        </div>
                        <div>
                            <SelectBox>
                                <label >Value:</label>
                                <input type="checkbox" onChange={() => toggleEdit('preco')}/>
                                <span>( Edit value ? )</span>
                            </SelectBox>
                            <CurrencyInput
                                value={produto.preco.value}
                                placeholder="R$ 0,00"
                                decimalSeparator=","
                                groupSeparator="."
                                disabled={!produto.preco.edit}
                                prefix="R$ "
                                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                                decimalsLimit={2}
                                onValueChange={(value) => {
                                    handleChange('preco', value)
                                }}
                            />
                        </div>
                        <OptionColors>
                            <SelectBox>
                                <label>Color:</label>
                                <input type="checkbox" onChange={() => toggleEdit('cor')}/>
                                <span>( Edit color ? )</span>
                            </SelectBox>
                            <SelectColor>
                                <select disabled={!produto.cor.edit} value={corSelecionada} onChange={handleChangeColor}>
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
                            <SelectBox>
                                <label >Cover Image:</label>
                                <input type="checkbox" onChange={() => toggleEdit('cover')}/>
                                <span>( Edit image cover ? )</span>
                            </SelectBox>
                            <ImageCover className={produto.cover.edit ? '' : 'disabled'}>
                                {produto.cover.value ?
                                    <CardUpdateImage url={produto.cover.value} deleteImage={setDeleteCover} />
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
                            <SelectBox>
                                <label>Image Details:</label>
                                <input type="checkbox" onChange={() => toggleEdit('images')}/>
                                <span>( Edit image details ? )</span>
                            </SelectBox>
                            <ImageDetails className={produto.images.edit ? '' : 'disabled'}>
                                {produto.images.value.map((img) => <CardUpdateImage url={img} deleteImage={setDeleteImage} />)}
                                {newImages ? newImages.map((img) =>  <CardUpdateImage url={img} />) : ''}
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
                            <InputArea type="submit" value={"Update"} />
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