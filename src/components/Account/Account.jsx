import "./Account.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [initialFormData, setInitialFormData] = useState({ ...formData });
  const [errors, setErrors] = useState({});
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);

  const isOnProfilePage = location.pathname === "/account";
  const isOnOrderPage = location.pathname === "/orders";

  // Carrega os dados do usuário ao montar o componente
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log("Resposta ao buscar os dados do usuário:", response.data);
        const { username: name, email } = response.data;
        setFormData({ ...formData, name, email });
        setInitialFormData({ name, email, newPassword: "", confirmPassword: "" });
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
        alert("Erro ao carregar os dados do perfil. Tente novamente mais tarde.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileClick = () => navigate("/account");
  const handleOrderClick = () => navigate("/orders");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateUpdatedFields = (fields) => {
    const newErrors = {};

    if (fields.name && !/^[A-Za-zÀ-ÿ\s]{3,}$/.test(fields.name)) {
      newErrors.name =
        "O nome deve conter pelo menos 3 caracteres e pode incluir letras com acento.";
    }

    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = "Por favor, insira um e-mail válido com '@' e '.com'.";
    }

    if (fields.newPassword || fields.confirmPassword) {
      if (fields.newPassword && fields.newPassword.length < 8) {
        newErrors.newPassword = "A nova senha deve ter pelo menos 8 caracteres.";
      }

      if (fields.newPassword !== fields.confirmPassword) {
        newErrors.confirmPassword = "As senhas não coincidem.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        updatedFields[key] = formData[key];
      }
    }

    if (validateUpdatedFields(updatedFields)) {
      try {
        const token = localStorage.getItem("jwt");
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/update`, 
          {
            username: updatedFields.name,
            email: updatedFields.email,
            password: updatedFields.newPassword
          }
          ,
          {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        alert("Alterações salvas com sucesso!");
        setInitialFormData({ ...formData });
        setFormData({
          ...formData,
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Erro ao salvar as alterações:", error);
        alert("Erro ao salvar as alterações. Tente novamente.");
      }
    }
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData, newPassword: "", confirmPassword: "" });
    setErrors({});
  };

  const isSaveButtonDisabled = Object.keys(formData).every(
    (key) => formData[key] === initialFormData[key],
  );

  return (
    <div className="account-container">
      <section className="account-info">
        <div className="account-card">
          <div className="account-method">
            <div className="account-p">
              <p
                className={`profile-option ${isProfileHovered ? "hovered" : ""} ${
                  isOnProfilePage ? "active" : ""
                }`}
                onClick={handleProfileClick}
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                Gerenciar Minha Conta
              </p>
            </div>
            <p
              className={`order-option ${isOrderHovered ? "hovered" : ""} ${
                isOnOrderPage ? "active" : ""
              }`}
              onClick={handleOrderClick}
              onMouseEnter={() => setIsOrderHovered(true)}
              onMouseLeave={() => setIsOrderHovered(false)}
            >
              Meus Pedidos
            </p>
            <br />
          </div>
        </div>
      </section>

      <section className="account-form">
        <h4 className="profile-title">Edite o seu perfil</h4>

        <form className="form-a" onSubmit={handleSubmit}>
          <div className="form-group-a">
            <div className="input-container">
              <label htmlFor="name">Nome Completo</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                aria-label="Nome"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
          </div>

          <div className="form-group-a">
            <div className="input-container">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Seu Email"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          </div>

          <div className="form-group-pass">
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input
                id="newPassword"
                type="password"
                name="newPassword"
                placeholder="Nova senha"
                value={formData.newPassword}
                onChange={handleChange}
                aria-label="Nova senha"
              />
              {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-label="Confirme sua senha"
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="save" disabled={isSaveButtonDisabled}>
              Salvar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Account;
