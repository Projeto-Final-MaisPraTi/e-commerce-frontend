import React from "react";
import styled from "styled-components";
import CardProduct from "../../components/Product/CardProduct";
import produtos from "./products";
import ProductCard from "../../components/FlashSales/ProductCard";

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
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
    .produtos {
        display: flex;
        gap: 15px;
        width: 100%;
        overflow-x: hidden;
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

const BestSelling = () => {
    return (
        <Container>
        <div className='title'>
            <span className='color'></span>
            <p>This Month</p>
        </div>
        <SecTitle>
            <h2>Best Selling Products</h2>
            <button>View All</button>
        </SecTitle>
        <div className="produtos">
            {produtos.map((produto) => produto.id < 18 ? <ProductCard key={produto.id} product={produto}/> : "")}
        </div>
        </Container>
    )
}

export default BestSelling;