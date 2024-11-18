import styled from "styled-components";
// import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 77%;
  height: 250px;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  background-color: white;
  gap: 20px;
  border-radius: 5px;
  transition: 0.5s;
  @media screen and (max-width: 500px){
    width: 95%;
    font-size: 14px;
  }
`;

const HomeManager = () => {
  return (
    <Container>
      <h1>Bem-vindo ao Gerenciamento de Produtos</h1>
    </Container>
  );
};

export default HomeManager;
