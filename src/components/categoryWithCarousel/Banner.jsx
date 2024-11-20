import img from "../../assets/phones/iphone_14_black_1.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BannerContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const BannerText = styled.div`
  color: white;
  height: 200px;
  max-width: 500px;

  @media (max-width: 767px) {
    text-align: center;
    padding-left: 0; /* Remove padding em telas menores */
  }
`;

const BannerButton = styled.button`
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  padding: 10px 30px;
  color: #fff;

  &:hover {
    background-color: #1f81e2;
  }
`;

const BannerImage = styled.div`
  img {
    height: 200px;
  }
`;
function Banner() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Redireciona para a página de detalhes do produto
    navigate(`/product/33`);
  };
  return (
    <BannerContainer className="banner-container">
      <BannerText>
        <h2>Iphone 14 Pro 128GB</h2>
        <p>
          O iPhone 14 Pro oferece uma experiência de última geração com sua tela Super Retina XDR e
          chip A16 Bionic, garantindo desempenho rápido e eficiente.
        </p>
        <BannerButton onClick={handleClick}>Ver mais</BannerButton>
      </BannerText>
      <BannerImage>
        <img src={img} />
      </BannerImage>
    </BannerContainer>
  );
}

export default Banner;