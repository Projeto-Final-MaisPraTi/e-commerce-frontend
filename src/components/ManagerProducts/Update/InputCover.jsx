import { SelectBox, ImageCover, UploadFile, ContainerAddImage, ImageWrapper, InputArea, PopUpDeleteImage, ButtonsDeleteImage } from "../StyleFormsProduct";
import CardUpdateImage from "../CardUpdateImage";


const InputCover = ({product, edit, deleteCoverImage, setDeleteCover, handleDeleteCover, handleAddCoverImage}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <label >Imagem de capa:</label>
                <input type="checkbox" onChange={() => toggleEdit('cover')} />
                <span>( Editar imagem de capa ? )</span>
            </SelectBox>
            <ImageCover className={product.cover.edit ? '' : 'disabled'}>
                {product.cover.value ?
                    <CardUpdateImage url={product.cover.value} deleteImage={setDeleteCover} />
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
    );
}

export default InputCover;