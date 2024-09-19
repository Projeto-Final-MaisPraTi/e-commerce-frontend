import React, { useState } from 'react';

import useLanguage from "../../utils/useLanguage.jsx";
import imageLogin  from "../../assets/loginImage.jpeg";
import Header      from "../../components/Header/Header.jsx";
import Footer      from "../../components/Footer/ComponentFooter.jsx";
import { Container, LoginImage, ContainerAccountCreate, AccountCreate, Title, SubTitle, InputField, Button, GoogleButton, HaveAccount } from './styles.jsx';

const Register = () => {

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
            <Title>{translations.register.createAccount}</Title>
            <SubTitle>{translations.register.enterDetails}</SubTitle>

            <InputField
              type="text"
              name="name"
              placeholder={translations.register.inputName}
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder={translations.register.inputEmail}
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder={translations.register.inputPassword}
              value={formData.password}
              onChange={handleChange}
            />

            <Button type="submit">{translations.register.buttonCreateAccount}</Button>
            <GoogleButton type="button">{translations.register.buttonLoginGoogle}</GoogleButton>
          </AccountCreate>

          <HaveAccount>{translations.register.haveAccount} <a href="#">{translations.register.login}</a></HaveAccount>
        </ContainerAccountCreate>

      </Container>
      <Footer />
    </>
  );
};

export default Register;