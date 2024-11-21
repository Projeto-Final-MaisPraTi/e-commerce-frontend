import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';

const Container = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 3em;
  color: #28a745;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
`;

const Text = styled.p`
  margin-bottom: 30px;
  font-size: 1em;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  font-size: 1em;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const PurchaseSuccess = () => {
  const navigate = useNavigate();

  const handleGoToPurchases = () => {
    navigate('/orders');
  };

  return (
    <Container>
      <IconWrapper>
        <FaCheckCircle />
      </IconWrapper>
      <Title>Compra realizada com sucesso!</Title>
      <Text>Você pode ver mais informações na página Minhas compras.</Text>
      <Button onClick={handleGoToPurchases}>
        <FaShoppingCart /> Ir para Minhas Compras
      </Button>
    </Container>
  );
};

export default PurchaseSuccess;
