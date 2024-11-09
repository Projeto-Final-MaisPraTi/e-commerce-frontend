import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getUpdateProduct, updateProduct } from "../../services/ProductService";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/SpinnerComponent/LoadingSpinner";
import PreviewProduct from "../../components/PreviewProduct/PreviewProduct";
import { deleteImageByUrl } from "../../services/ImageService";
import { opcoesDeCores } from "../../utils/ProductOptions";
import InputName from "../../components/ManagerProducts/Update/InputName";
import InputDescription from "../../components/ManagerProducts/Update/InputDescription";
import InputCategory from "../../components/ManagerProducts/Update/InputCategory";
import InputQuantity from "../../components/ManagerProducts/Update/InputQuantity";
import InputPrice from "../../components/ManagerProducts/Update/InputPrice";
import InputColors from "../../components/ManagerProducts/Update/InputColors";
import InputCover from "../../components/ManagerProducts/Update/InputCover";
import InputAddImagesDetails from "../../components/ManagerProducts/Update/InputAddImagesDetails";
import { createUpdateProdutoData } from "../../utils/utilsUpdateProduct";

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
                name: { value: result.name, edit: false },
                price: { value: result.price, edit: false },
                color: { value: result.color, edit: false },
                description: { value: result.description, edit: false },
                stock: { value: result.stock, edit: false },
                category: { value: result.category, edit: false },
                images: { value: result.images, edit: false },
                cover: { value: result.cover, edit: false }
            })
            const corEncontrada = opcoesDeCores.find((opcao) => opcao.nome === result.color);
            setCorSelecionada(corEncontrada.valor);
        });
    }, []);


    // ADICIONA IMAGEM PARA OS DETALHES
    
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
    // Deleta a imagem de capa
    const handleDeleteCover = async () => {
        if (produto.cover.value && !(cover instanceof File) && produto.cover.value.includes('https:')) {
            let nameImage = getNameImage(produto.cover.value);
            let url = produto.cover.value;
            await deleteImageByUrl(url);
            // await deleteImagesFirebase(nameImage);
            console.log(nameImage);
        }
        handleChange('cover', null);
        setCover(false);
        setDeleteCover(false);
    }

    // Delete a imagem dos detalhes
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
        handleChange('category', selectedValue);
    };

    // Alterar cor selecionada
    // Ver utilidade em outros componentes

    const handleChangeColor = (event) => {
        setCorSelecionada(event.target.value);
        console.log(event.target.value);

        const corEncontrada = opcoesDeCores.find((opcao) => opcao.valor === event.target.value);
        if (corEncontrada) {
            handleChange('color', corEncontrada.nome);
        }
    };

    // Enviar os arquivos para fazer atulização
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const data = await createUpdateProdutoData(produto, imageFiles, setCover);
            const resp = await updateProduct(data);
            console.log(resp);
            alert("Produto atualizado com sucesso!");
            setLoading(false);
            // window.location.reload();
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
                        <LoadingSpinner size={70} />
                    </WaitProduct>
                </Container>
            </>
        );
    }

    return (
        <>
            <Container>
                <SidePreview>
                    <PreviewProduct name={produto.name.value} price={produto.price.value} cover={produto.cover.value} />
                </SidePreview>
                <SideForm>
                    <div className="title">
                        <h2>Editar Produto</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputName edit={toggleEdit} product={produto} handleChange={handleChange}/>
                        <InputDescription edit={toggleEdit} product={produto} handleChange={handleChange}/>
                        <InputCategory edit={toggleEdit} product={produto} handleCategory={handleChangeCategory}/>
                        <InputQuantity edit={toggleEdit} product={produto} handleChange={handleChange}/>
                        <InputPrice edit={toggleEdit} product={produto} handleChange={handleChange}/>
                        <InputColors edit={toggleEdit} product={produto} corSelect={corSelecionada} handleChange={handleChangeColor}/>
                        <InputCover 
                        product={produto}
                        edit={toggleEdit}
                        deleteCoverImage={deleteCoverImage}
                        setDeleteCover={setDeleteCover}
                        handleDeleteCover={handleDeleteCover}
                        handleAddCoverImage={handleAddCoverImage}
                        />
                        <InputAddImagesDetails 
                        product={produto}
                        edit={toggleEdit}
                        newImages={newImages}
                        setDeleteImage={setDeleteImage}
                        handleAddImages={handleAddImages}
                        deleteImage={deleteImage}
                        handleDeleteImageDetails={handleDeleteImageDetails}
                        />
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