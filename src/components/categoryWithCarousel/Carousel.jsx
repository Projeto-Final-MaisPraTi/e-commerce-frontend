import img1 from '../../assets/CarouselImgs/img1.png';
import styled from 'styled-components';


const CarouselImg = styled.img`
  filter:drop-shadow(0 0 50px #ffffff9d);
`;
const CarouselDiv=styled.div`
padding-left: 50px;
border-left: solid 0.5px;
border-color: #00000039;
@media (max-width: 767px) {
    border-left: none;
  }
`;
const CarouselBackground=styled.div`
background-color: black;
margin-top: 40px;

`;
const TextCarousel=styled.div`
margin: auto;
color: white;
padding-left: 20px;
@media (max-width: 767px) {
  text-align: center;
}
`;
const Indicators=styled.div`
button {
  border-radius: 100%;
  width: 12px !important;
  height: 12px !important;
}

`;

const CaroselButton=styled.button`
background-color: #00FF66;
border: none;
border-radius: 4px;
padding: 10px 30px;
color: #fff;
&:hover{
  background-color: #03b349;
}
`;


function Carousel() {
    return (
      <CarouselDiv className='col-12 col-md-9'>
      <CarouselBackground id="carousel-id" className="carousel slide" data-bs-ride="carousel">
        <Indicators className="carousel-indicators">
          <button type="button" data-bs-target="#carousel-id" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel-id" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel-id" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </Indicators>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <TextCarousel>
                <h2>Enhance Your Music Experience</h2>
                <CaroselButton>Buy Now!</CaroselButton>
              </TextCarousel>
            </div>
            <div className="col-md-6">
              <CarouselImg src={img1} className="d-block w-100" alt="First slide" />
            </div>
          </div>
        </div>
          <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <TextCarousel>
                <h2>Enhance Your Music Experience</h2>
                <CaroselButton>Buy Now!</CaroselButton>
              </TextCarousel>
            </div>
            <div className="col-md-6">
              <CarouselImg src={img1} className="d-block w-100" alt="First slide" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <TextCarousel>
                <h2>Enhance Your Music Experience</h2>
                <CaroselButton>Buy Now!</CaroselButton>
              </TextCarousel>
            </div>
            <div className="col-md-6">
              <CarouselImg src={img1} className="d-block w-100" alt="First slide" />
            </div>
          </div>
        </div>
        </div>
      </CarouselBackground>
      </CarouselDiv>
    );
  }
  
  export default Carousel;
  