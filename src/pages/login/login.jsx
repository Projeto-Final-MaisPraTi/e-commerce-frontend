import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/ComponentFooter.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

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
          `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
          { email, password },
          { headers: { "Content-Type": "application/json" } }
        );

        localStorage.setItem("jwt", response.data.accessToken);
        navigate("/");
      } catch (error) {
        if (error.response) {
          // Erros enviados pelo backend
          setErrorMessage(error.response.data.message || "Erro no login.");
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
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2 className={styles.welcomeBack}>Bem-vindo de volta!</h2>
          <p className={styles.dontHaveAccount}>
            Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
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

            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
