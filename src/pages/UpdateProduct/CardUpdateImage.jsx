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
    div {
    }
    img{
        height: 13rem;
        max-width: 200px;
        padding: 10px;
        object-fit: contain;
    }
`

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 35px;
`

const CardUpdateImage = ({ url }) => {
    return (
        <Container>
            <Header>
                <CiSquareRemove style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} />
            </Header>
            <div>
                <img src={url} alt="" />
            </div>
        </Container>
    )
}

export default CardUpdateImage;