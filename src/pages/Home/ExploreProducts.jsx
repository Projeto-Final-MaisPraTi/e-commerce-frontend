import styled from "styled-components";
import produtos from "./products";
import ProductCard from "../../components/FlashSales/ProductCard";
import { useState, useEffect } from "react";
import useLanguage from '../../utils/useLanguage';

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
        color: #DB4444;
        font-weight: bold;
        margin: 0;
    }
    }
    .color {
        margin-right: 10px;
        height: 30px;
        width: 18px;
        background-color: #DB4444;
        border-radius: 5px;
    }
    .products-gid{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
        @media (max-width: 1300px) {
            grid-template-columns: repeat(5, 1fr); 
        }

        @media (max-width: 1000px) {
            grid-template-columns: repeat(4, 1fr); 
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }
`

const SecTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    button {
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #DB4444;
        width: 120px;
        &:hover {
            background-color: #da5151;
        }
    }
`

const ExploreProducts = () => {

    const [maxProducts, setMaxProducts] = useState(8);
    const { translations } = useLanguage();

    const handleMaxProducts = () => {
        const width = window.innerWidth;

        if (width > 1200) {
            setMaxProducts(8);
        } else if (width > 768) {
            setMaxProducts(6);
        } else if (width > 480) {
            setMaxProducts(4);
        } else {
            setMaxProducts(1);
        }
    }

    useEffect(() => {
        handleMaxProducts();

        window.addEventListener("resize", handleMaxProducts);

        return () => {
            window.removeEventListener("resize", handleMaxProducts);
        };
    }, []);

    return (
        <Container>
            <div className='title'>
                <span className='color'></span>
                <p>{translations.home.ExploreProducts.p}</p>
            </div>
            <SecTitle>
                <h2>{translations.home.ExploreProducts.h2}</h2>
                <button>{translations.home.ExploreProducts.viewer}</button>
            </SecTitle>
            <div className="products-gid">
                {produtos.slice(0, maxProducts).map((produto) => <ProductCard key={produto.id} product={produto} />)}
            </div>

        </Container>
    )
}

export default ExploreProducts;