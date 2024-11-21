import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 15px;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
  gap: 0.5rem;
  width: 100%;
  max-width: 250px;
  @media (max-width: 768px) {
    min-width: 200px;
  }

  @media (max-width: 480px) {
    min-width: 150px;
  }
`;

const ProductCardSkeleton = ({ cards = 3 }) => {
  return (
    <SkeletonTheme color="#f9b1e1" highlightColor="#a9a9a9">
      <Container>
        {Array.from({ length: cards }).map((_, index) => (
          <Card key={index}>
            <Skeleton height={200} />
            <Skeleton height={25} width="80%" />
            <Skeleton height={25} width="30%" />
            <Skeleton height={25} width="70%" />
          </Card>
        ))}
      </Container>
    </SkeletonTheme>
  );
};

export default ProductCardSkeleton;
