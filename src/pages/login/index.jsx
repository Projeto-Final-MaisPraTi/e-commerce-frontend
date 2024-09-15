import React, { useState } from 'react';

import useLanguage from "../../utils/useLanguage.jsx";
import imageLogin  from "../../assets/loginImage.jpeg";
import Header      from "../../components/Header/Header.jsx";
import Footer      from "../../components/Footer/ComponentFooter.jsx";
import { Container, LoginImage, ContainerAccountCreate, AccountCreate, Title, SubTitle, InputField, Button, GoogleButton, HaveAccount } from './styles.jsx';

const AccountCreationForm = () => {

  const { language, switchLanguage, translations } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Header />

      <Container>

        <LoginImage>
          <img src={imageLogin} alt="Celular e carrinho de compras" />
        </LoginImage>

        <ContainerAccountCreate>
          <AccountCreate onSubmit={handleSubmit}>
            <Title>{translations.createAccount}</Title>
            <SubTitle>Enter your details below</SubTitle>

            <InputField
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button type="submit">Create Account</Button>
            <GoogleButton type="button">Login with Google</GoogleButton>
          </AccountCreate>

          <HaveAccount>Already have account? <a href="#">Log in</a></HaveAccount>
        </ContainerAccountCreate>

      </Container>
      <Footer />
    </>
  );
};

export default AccountCreationForm;