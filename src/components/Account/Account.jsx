import "./Account.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [initialFormData, setInitialFormData] = useState({ ...formData });
  const [storedPassword, setStoredPassword] = useState("12345678"); // Simulação de senha atual armazenada
  const [errors, setErrors] = useState({});
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);

  const isOnProfilePage = location.pathname === "/account";
  const isOnOrderPage = location.pathname === "/orders";

  useEffect(() => {
    // document.title = "My Account";
    setFormData({
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setInitialFormData({
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
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

    if (fields.currentPassword || fields.newPassword || fields.confirmPassword) {
      if (!fields.currentPassword || fields.currentPassword !== storedPassword) {
        newErrors.currentPassword = "A senha atual está incorreta.";
      }

      if (fields.newPassword && !/^\d{8}$/.test(fields.newPassword)) {
        newErrors.newPassword = "A nova senha deve ter exatamente 8 caracteres numéricos.";
      }

      if (fields.newPassword !== fields.confirmPassword) {
        newErrors.confirmPassword = "As senhas não coincidem.";
      }
    }

    for (const [key, value] of Object.entries(fields)) {
      if (!value.trim()) {
        newErrors[key] = "Este campo é obrigatório.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFields = {};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        updatedFields[key] = formData[key];
      }
    }

    if (validateUpdatedFields(updatedFields)) {
      console.log("Alterações salvas:", updatedFields);

      if (updatedFields.newPassword) {
        setStoredPassword(updatedFields.newPassword);
      }

      alert("Alterações salvas com sucesso!");
      setInitialFormData({ ...formData });
      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData, currentPassword: "", newPassword: "", confirmPassword: "" });
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
                id="currentPassword"
                type="password"
                name="currentPassword"
                placeholder="Senha atual"
                value={formData.currentPassword}
                onChange={handleChange}
                aria-label="Senha atual"
              />
              {errors.currentPassword && <p className="error-text">{errors.currentPassword}</p>}
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
