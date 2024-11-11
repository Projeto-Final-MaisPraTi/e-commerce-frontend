import { useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
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

  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  //   onError: () => console.log("Login Failed"),
  // });

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
          `${import.meta.env.VITE_BACKEND_URL}/api/login`,
          { email, password },
          { headers: { "Content-Type": "application/json" } },
        );

        localStorage.setItem("jwt", JSON.stringify(response.data.token)); // Salva o token no localStorage
        navigate("/"); // Redireciona para a página inicial
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

          {/* <div className={styles.divider}>
            <span>OU</span>
          </div>

          <button onClick={() => loginWithGoogle()} className={styles.googleButton}>
            <svg
              className={styles.googleIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Fazer login com o Google
          </button> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
