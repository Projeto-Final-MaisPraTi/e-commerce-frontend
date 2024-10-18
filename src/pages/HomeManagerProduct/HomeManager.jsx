import styled from "styled-components";
// import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 77%;
  height: 250px;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  gap: 20px;
  transition: 0.5s;
`;

const HomeManager = () => {
  return (
    <Container>
      <h1>Welcome to Product Management</h1>
    </Container>
  );
};

export default HomeManager;
