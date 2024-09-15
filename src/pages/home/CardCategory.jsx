import React, { useState } from 'react';
import styled from 'styled-components';
import Gaming from '../../assets/svgs/Gaming';
import Headphones from '../../assets/svgs/Headphones';
import Phones from '../../assets/svgs/Phones';
import SmartWatch from '../../assets/svgs/SmartWatch';
import Camera from '../../assets/svgs/Camera';
import Computers from '../../assets/svgs/Computers';
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
`

const CategoriesContainer = styled.div`
     display: flex;
     gap: 20px;
`

const Categories = styled.div`
    .slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        width: 200px;
        border: solid 1px grey;
        text-align: center;
        border-radius: 3px;
        p{
            margin-top: 10px;
        }
    }
    .slide:hover{
        background-color: #DB4444;
        p {
            color: white;
        }
        cursor: pointer;
    }
`

function CardCategory() {

    const { translations } = useLanguage();
    const [hovered, setHover] = useState();

    const handleMouseHover = (componenteHover) => {
        setHover(componenteHover);
    }

    const handleMouseLeave = () => {
        setHover(null);
    }
  return (
    <Container>
        <div className='title'>
            <span className='color'></span>
            <p>{translations.homeCategories.p}</p>
        </div>
      <Categories>
        <h2>{translations.homeCategories.h2}</h2>
        <CategoriesContainer>
            <div className="slide" onMouseOver={() => handleMouseHover("Phones")} onMouseLeave={handleMouseLeave}>
                <Phones color={hovered == "Phones" ? "white": "black"}/>
                <p>Phones</p>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Computers")} onMouseLeave={handleMouseLeave}>
                <Computers color={hovered == "Computers" ? "white": "black"}/>
                <p>Computers</p>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("SmartWatch")} onMouseLeave={handleMouseLeave}>
                <SmartWatch color={hovered == "SmartWatch" ? "white": "black"}/>
                <p>SmartWatch</p>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Camera")} onMouseLeave={handleMouseLeave}>
                <Camera color={hovered == "Camera" ? "white": "black"}/>
                <p>Camera</p>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Headphones")} onMouseLeave={handleMouseLeave}>
                <Headphones color={hovered == "Headphones" ? "white": "black"}/>
                <p>Headphones</p>
            </div>
            <div className="slide" onMouseOver={() => handleMouseHover("Gaming")} onMouseLeave={handleMouseLeave}>
                <Gaming color={hovered == "Gaming" ? "white": "black"}/>
                <p>Gaming</p>
            </div>
        </CategoriesContainer>
      </Categories>
    </Container>
  )
}

export default CardCategory;
