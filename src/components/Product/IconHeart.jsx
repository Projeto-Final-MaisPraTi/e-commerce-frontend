import styled from "styled-components";

const Container = styled.svg``;

export default function IconHeart({ className }) {
  return (
    <Container
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} "bi bi-heart-fill"`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </Container>
  );
}
