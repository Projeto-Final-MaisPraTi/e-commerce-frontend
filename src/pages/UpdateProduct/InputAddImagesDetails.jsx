import { SelectBox, UploadFile, ContainerAddImage, ImageWrapper, InputArea, PopUpDeleteImage, ButtonsDeleteImage, ImageDetails } from "./StyleFormsProduct";
import CardUpdateImage from "./CardUpdateImage";

const InputAddImagesDetails = ({product, edit, newImages, setDeleteImage, handleAddImages, deleteImage, handleDeleteImageDetails}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <label>Imagem de detalhes:</label>
                <input type="checkbox" onChange={() => toggleEdit('images')} />
                <span>( Editar imagem de detalhes ? )</span>
            </SelectBox>
            <ImageDetails className={product.images.edit ? '' : 'disabled'}>
                {product.images.value.map((img, index) => <CardUpdateImage key={`Image${index}`} url={img} deleteImage={setDeleteImage} />)}
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
    )
}

export default InputAddImagesDetails;