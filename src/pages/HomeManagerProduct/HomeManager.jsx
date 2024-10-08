import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 30px;
  gap: 20px;
  transition: 0.5s;
`;

const HomeManager = () => {

    
    return (
        <Container>
          <h1>Welcome to Product Management</h1>
        </Container>
    );
}

export default HomeManager;
