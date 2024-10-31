import { useState } from "react";
import axios from "axios";
import styles from "./register.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/ComponentFooter.jsx";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!name) {
      newErrors.name = "Nome é obrigatório!";
      valid = false;
    }

    if (!email) {
      newErrors.email = "E-mail é obrigatório!";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "E-mail inválido!";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/register`,
          { name, email, password },
          { headers: { "Content-Type": "application/json" } },
        );

        if (response.data.token) {
          // Armazena o token JWT e redireciona para a página inicial
          localStorage.setItem("jwt", response.data.token);
          navigate("/");
        } else {
          setErrorMessage("Erro no registro. Tente novamente.");
        }
      } catch (error) {
        if (error.response) {
          // Erros enviados pelo backend
          setErrorMessage(error.response.data.message || "Erro no registro.");
        } else {
          // Erros de conexão
          console.error("Erro na requisição:", error);
          setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
        }
      }
    }
  };

  return (
    <>
      <Header />

      <div className={styles.registerContainer}>
        <div className={styles.registerBox}>
          <h2 className={styles.createAccount}>Crie uma conta</h2>
          <p className={styles.enterDetails}>Insira seus dados abaixo</p>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
            <input
              type="text"
              placeholder="Nome"
              className={styles.loginName}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              className={styles.loginInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <input
              type="password"
              placeholder="Senha"
              className={styles.loginInputPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}

            {errorMessage && <p className={styles.error}>{errorMessage}</p>}

            <button type="submit" className={styles.buttonCreateAccount}>
              Criar Conta
            </button>
          </form>

          <p className={styles.haveAccount}>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
