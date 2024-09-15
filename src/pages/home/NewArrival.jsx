import React from "react";
import styled from "styled-components";

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
`

const Grid = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;
    .item3 {
        display: flex;
        gap: 30px;
    }
`

const NewArrival = () => {
    return (
        <Container>
        <div className='title'>
            <span className='color'></span>
            <p>Featured</p>
        </div>
        <h2>New Arrival</h2>
        <Grid>
            <div className="item1">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href="#">Shop Now</a>
            </div>
            <div className="item2">
                <div>
                    <h2>Women’s Collections</h2>
                    <p>Featured woman collections that give you another vibe.</p>
                    <a href="#">Shop Now</a>
                </div>
                <div className="item3">
                    <div>
                        <h2>Speakers</h2>
                        <p>Amazon wireless speakers</p>
                        <a href="#">Shop Now</a>
                    </div>
                    <div>
                        <h2>Perfume</h2>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            </div>
        </Grid>
        </Container>
    )
}

export default NewArrival;