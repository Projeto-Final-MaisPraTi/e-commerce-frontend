import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";
import ProductCard from "../ProductCard/ProductCard";

const Container = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    @media screen and (max-width: 500px){
        width: 160px;
        padding: 5px 0px;
    }
`

const Card = styled.div`
    /* pointer-events: none; */
`

const EditItens = styled.div`
    margin-bottom: 15px;
`

const Itens = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
`

const CardUpdateProduct = (props) => {
    const product = props.product;
    const setItemUpdate = props.update;
    const setDeleteItem = props.delete;
    product["discount"] = 0;
    
    return (
        <Container>
            <EditItens>
                <Itens>
                    <FaEdit style={{fontSize: '25px', cursor: 'pointer' }} onClick={() => setItemUpdate({id: product.id, nome: product.name})}/>
                    <CiSquareRemove style={{ color: 'red', fontSize: '30px', cursor: 'pointer'}} onClick={() => setDeleteItem({id: product.id, nome: product.name})}/>
                </Itens>
            </EditItens>
            <Card>
                <ProductCard product={product}/>
            </Card>
        </Container>
    )
}

export default CardUpdateProduct;