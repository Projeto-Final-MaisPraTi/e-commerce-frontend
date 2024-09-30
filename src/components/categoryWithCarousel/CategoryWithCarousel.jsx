import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from './Carousel';
import Category from './Category';
import styled from 'styled-components';

const Container=styled.div`
margin: 0 10% 50px 10%;
width: 80vw;
`;

function CategoryWithCarousel(){


    return(
        <Container className='container'>
            <div className='row'>
            <Category/>
            <Carousel/>
            </div>
        </Container>




    );
}

export default CategoryWithCarousel;