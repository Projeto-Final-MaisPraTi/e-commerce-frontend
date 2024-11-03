import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getUpdateProduct, updateProduct } from "../../services/ProductService";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/SpinnerComponent/LoadingSpinner";
import PreviewProduct from "../../components/PreviewProduct/PreviewProduct";
import CurrencyInput from 'react-currency-input-field';
import CardUpdateImage from "./CardUpdateImage";
import { deleteImageByUrl } from "../../services/ImageService";
import { deleteImagesFirebase } from "../../services/DeleteImageFirebase";
import { categories, opcoesDeCores } from "../../utils/ProductOptions";
import { handleUpload, handleOneUpload } from "../../services/ProductSubmission";

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
    background-color: white;
    border-radius: 5px;
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
            margin-top: 15px;
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
    }
    .disabled {
    pointer-events: none; 
    opacity: 0.5; 
    }
    .currency-input {
        width: 80%;
        height: 35px;
        font-size: 20px;
        padding: 5px;
        margin: auto;
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

const Loading = styled.div`
    margin-top: 15px;
`


function UpdateProduct() {
    const { id } = useParams();

    const [produto, setProduto] = useState();
    const [newImages, setNewImages] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [cover, setCover] = useState();
    const [deleteImage, setDeleteImage] = useState(false);
    const [deleteCoverImage, setDeleteCover] = useState(false);
    const [corSelecionada, setCorSelecionada] = useState("#000000");
    const [loading, setLoading] = useState(false);

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
            product = await getUpdateProduct(id);
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
                images: { value: result.images, edit: false },
                cover: { value: result.cover, edit: false }
            })
            const corEncontrada = opcoesDeCores.find((opcao) => opcao.nome === result.cor);
            setCorSelecionada(corEncontrada.valor);
        });
    }, []);


    // ADICIONA IMAGEM PARA OS DETALHES

    // const handleAddImage = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             const newImageUrl = reader.result;

    //             setNewImages(prevImages => [...prevImages, newImageUrl]);

    //             setImageFiles(prevFiles => [...prevFiles, file]);
    //         }
    //         console.log(newImages);
    //         reader.readAsDataURL(file);
    //     }
    // };
    
    const handleAddImages = (event) => {
        const files = Array.from(event.target.files);
        if (files) {
            files.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const newImageUrl = reader.result;
    
                    setNewImages(prevImages => [...prevImages, newImageUrl]);
    
                    setImageFiles(prevFiles => [...prevFiles, file]);
                }
                reader.readAsDataURL(file);
            })
            console.log(newImages);
            console.log(imageFiles);
        }
    };


    // ADICIONA IMAGEM DE CAPA    

    const handleAddCoverImage = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange('cover', file);
                setCover(reader.result);
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
        if (produto.cover.value && !(cover instanceof File) && produto.cover.value.includes('https:')) {
            let nameImage = getNameImage(produto.cover.value);
            let url = produto.cover.value;
            await deleteImageByUrl(url);
            await deleteImagesFirebase(nameImage);
            console.log(nameImage);
        }
        handleChange('cover', null);
        setCover(false);
        setDeleteCover(false);
    }

    const handleDeleteImageDetails = async () => {
        if (!(cover instanceof File) && deleteImage.includes("https:")) {
            let nameImage = getNameImage(deleteImage);
            let url = deleteImage;
            await deleteImageByUrl(url);
            // await deleteImagesFirebase(nameImage);
        }
        if (produto.images.value != null) {
            const updatedImages = produto.images.value.filter(image => image !== deleteImage);
            handleChange('images', updatedImages);
        }
        if (newImages) {
            const prevImages = newImages.filter(image => image !== deleteImage);
            setNewImages(prevImages);
        }
        setDeleteImage(false);
    }


    // Muda a categoria selecionada
    const handleChangeCategory = (event) => {
        const selectedValue = event.target.value;
        handleChange('categoria', selectedValue);
    };

    // cor 
    // também usado duas vezes em componentes diferentes


    const handleChangeColor = (event) => {
        setCorSelecionada(event.target.value);
        console.log(event.target.value);

        const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
        if (corEncontrada) {
            handleChange('cor', corEncontrada.nome);
        }
    };

    const createUpdateProdutoData = async () => {
        const data = {};
        data['id'] = produto.id;
        if (produto.nome.edit) {
            data['nome'] = produto.nome.value;
        }
        if (produto.cor.edit) {
            data['cor'] = produto.cor.value;
        }
        if (produto.descricao.edit) {
            data['descricao'] = produto.descricao.value;
        }
        if (produto.estoque.edit) {
            data['estoque'] = produto.estoque.value;
        }
        if (produto.categoria.edit) {
            data['categoria'] = produto.estoque.value;
        }
        if (produto.images.edit && newImages.length > 0) {
            console.log(newImages);
            console.log(imageFiles);
            const urlImages = await handleUpload(imageFiles);
            data['images'] = urlImages;
        }
        if (produto.cover.edit) {
            if (produto.cover.value && produto.cover.value instanceof File) {
                const urlCover = await handleOneUpload(produto.cover.value);
                setCover(urlCover);
                data['cover'] = urlCover;
            }
        }
        return data;
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const data = await createUpdateProdutoData();
            const resp = await updateProduct(data);
            console.log(resp);
            alert("Produto atualizado com sucesso!");
            setLoading(false);
            window.location.reload();
            return;
        } catch (error) {
            alert("Erro ao atualizar produto");
            setLoading(false);
            console.log(error);
        }
    };


    if (!produto) {
        return (
            <>
                <Container>
                    <WaitProduct>
                        <LoadingSpinner size={80} />
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
                        <h2>Editar Produto</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <SelectBox>
                                <Label>Nome:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('nome')} />
                                <span>( Editar nome ? )</span>
                            </SelectBox>
                            <InputArea disabled={!produto.nome.edit} type="text" value={produto.nome.value} onChange={(event) => handleChange('nome', event.target.value)} />
                        </div>
                        <div>
                            <SelectBox>
                                <Label>Descrição:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('descricao')} />
                                <span>( Editar descrição ? )</span>
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
                                <Label>Categoria:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('categoria')} />
                                <span>( Editar categoria ? )</span>
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
                                <Label>Quantidade:</Label>
                                <input type="checkbox" onChange={() => toggleEdit('estoque')} />
                                <span>( Editar quantidade ? )</span>
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
                                <label >Preço:</label>
                                <input type="checkbox" onChange={() => toggleEdit('preco')} />
                                <span>( Editar preço ? )</span>
                            </SelectBox>
                            <CurrencyInput
                                className="currency-input"
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
                                <label>Cor:</label>
                                <input type="checkbox" onChange={() => toggleEdit('cor')} />
                                <span>( Editar cor ? )</span>
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
                                <label >Imagem de capa:</label>
                                <input type="checkbox" onChange={() => toggleEdit('cover')} />
                                <span>( Editar imagem de capa ? )</span>
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
                                            <button type="button" className="yes" onClick={handleDeleteCover}>Sim</button>
                                            <button type="button" className="no" onClick={() => setDeleteCover(false)}>Não</button>
                                        </ButtonsDeleteImage>
                                    </PopUpDeleteImage>
                                }
                            </ImageCover>
                        </div>
                        <div>
                            <SelectBox>
                                <label>Imagem de detalhes:</label>
                                <input type="checkbox" onChange={() => toggleEdit('images')} />
                                <span>( Editar imagem de detalhes ? )</span>
                            </SelectBox>
                            <ImageDetails className={produto.images.edit ? '' : 'disabled'}>
                                {produto.images.value.map((img, index) => <CardUpdateImage key={`Image${index}`} url={img} deleteImage={setDeleteImage} />)}
                                {newImages ? newImages.map((img, index) => <CardUpdateImage key={`newImage${index}`} url={img} deleteImage={setDeleteImage} />) : ''}
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
                                        onChange={handleAddImages}
                                        multiple
                                    />
                                </UploadFile>
                                {deleteImage &&
                                    <PopUpDeleteImage>
                                        <p>Deseja realmente deletar esta imagem ?</p>
                                        <p><span>A alteraçao é aplicada imediatamente</span></p>
                                        <ButtonsDeleteImage>
                                            <button type="button" className="yes" onClick={handleDeleteImageDetails}>Sim</button>
                                            <button type="button" className="no" onClick={() => setDeleteImage(false)}>Não</button>
                                        </ButtonsDeleteImage>
                                    </PopUpDeleteImage>
                                }
                            </ImageDetails>
                        </div>
                        <div className="button_submit">
                            <InputArea type="submit" value={"Atualizar produto"} />
                        </div>
                        {loading && (
                            <Loading>
                                <h3>Atualizando informações...</h3>
                                <div>
                                    <LoadingSpinner size={80}/>
                                </div>
                            </Loading>
                        )}
                    </form>
                </SideForm>
            </Container>
        </>
    );
}

export default UpdateProduct;