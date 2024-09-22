import { useState } from "react";
import useLanguage from "../../utils/useLanguage.jsx";
import imageLogin from "../../assets/loginImage.jpeg";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/ComponentFooter.jsx";
import {
  Container,
  LoginImage,
  ContainerAccountCreate,
  AccountCreate,
  Title,
  SubTitle,
  InputField,
  Button,
  HaveAccount,
} from "./styles.jsx";

const AccountCreationForm = () => {
  const { translations } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            <Title>{translations.login.loginToAccount}</Title>
            <SubTitle>{translations.login.enterDetails}</SubTitle>

            {/* <InputField
              type="text"
              name="name"
              placeholder={translations.login.inputName}
              value={formData.name}
              onChange={handleChange}
            /> */}
            <InputField
              type="email"
              name="email"
              placeholder={translations.login.inputEmail}
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder={translations.login.inputPassword}
              value={formData.password}
              onChange={handleChange}
            />

            <Button type="submit">{translations.login.login}</Button>
          </AccountCreate>

          <HaveAccount>
            <a href="#">{translations.login.forgetPassword}</a>
          </HaveAccount>
        </ContainerAccountCreate>
      </Container>
      <Footer />
    </>
  );
};

export default AccountCreationForm;
