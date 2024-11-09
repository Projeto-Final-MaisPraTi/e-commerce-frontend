import { SelectBox, UploadFile, ContainerAddImage, ImageWrapper, InputArea, PopUpDeleteImage, ButtonsDeleteImage, ImageDetails } from "../StyleFormsProduct";
import CardUpdateImage from "../CardUpdateImage";

const InputRegisterAddImagesDetails = ({product, setDeleteImage, handleAddImages, deleteImage, handleDeleteImageDetails}) => {
    return (
        <div>
            <SelectBox>
                <label>Imagem de detalhes:</label>
            </SelectBox>
            <ImageDetails>
                {product.images.map((img, index) => <CardUpdateImage key={`Image${index}`} url={img} deleteImage={setDeleteImage} />)}
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
                        onChange={handleAddImages}
                        multiple
                    />
                </UploadFile>
                {deleteImage &&
                    <PopUpDeleteImage>
                        <p>Deseja realmente deletar esta imagem ?</p>
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

export default InputRegisterAddImagesDetails;