import styled from "styled-components";
import { CiSquareRemove } from "react-icons/ci";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 250px;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.3);
    border-radius: 10px;
    img{
        height: 13rem;
        max-width: 200px;
        padding: 10px;
        object-fit: contain;
    }
`

const Image = styled.div`
     height: 85%;
`

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 35px;
`

const CardUpdateImage = ({ url, deleteImage }) => {

    if (url instanceof File) {
        url = URL.createObjectURL(url)
    }

    return (
        <Container>
            <Header>
                <CiSquareRemove onClick={() => deleteImage(url)} style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} />
            </Header>
            <Image>
                <img src={url} alt="" />
            </Image>
        </Container>
    )
}

export default CardUpdateImage;