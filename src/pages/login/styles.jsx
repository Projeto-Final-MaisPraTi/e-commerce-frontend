import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8.063rem;
  width: 90%;
  height: 48.813rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const LoginImage = styled.div`
  width: 68.75rem;

  img {
    width: 59.375rem;

    @media (max-width: 1200px) {
      width: 37.5rem;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerAccountCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const AccountCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21rem;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 45px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  margin-bottom: 20px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: red;
  color: white;
  padding: 12px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: darkred;
  }
`;

export const HaveAccount = styled.p`
  margin-top: 15px;

  a {
    text-decoration: none;
  }
`;
