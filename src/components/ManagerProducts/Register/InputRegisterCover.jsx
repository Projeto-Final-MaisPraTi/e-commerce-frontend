import { SelectBox, ImageCover, UploadFile, ContainerAddImage, ImageWrapper, InputArea, PopUpDeleteImage, ButtonsDeleteImage } from "../StyleFormsProduct";
import CardUpdateImage from "../CardUpdateImage";


const InputRegisterCover = ({product, deleteCoverImage, setDeleteCover, handleDeleteCover, handleAddCoverImage}) => {
    return (
        <div>
            <SelectBox>
                <label >Imagem de capa:</label>
            </SelectBox>
            <ImageCover>
                {product.cover ?
                    <CardUpdateImage url={product.cover} deleteImage={setDeleteCover} />
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
                        <ButtonsDeleteImage>
                            <button type="button" className="yes" onClick={handleDeleteCover}>Sim</button>
                            <button type="button" className="no" onClick={() => setDeleteCover(false)}>Não</button>
                        </ButtonsDeleteImage>
                    </PopUpDeleteImage>
                }
            </ImageCover>
        </div>
    );
}

export default InputRegisterCover;