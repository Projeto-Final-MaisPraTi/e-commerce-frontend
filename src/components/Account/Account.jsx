import "./Account.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Para navegação e detecção da rota

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Para verificar a rota atual

  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isPaymentHovered, setIsPaymentHovered] = useState(false); // Estado para hover em payment
  const [isProfileHovered, setIsProfileHovered] = useState(false); // Estado para hover em profile
  const [isOrderHovered, setIsOrderHovered] = useState(false); // Estado para hover em profile

  // Verifica se estamos na página /account, /payment ou /order
  const isOnProfilePage = location.pathname === "/account";
  const isOnPaymentPage = location.pathname === "/payment";
  const isOnOrderPage = location.pathname === "/order";

  const handleProfileClick = () => {
    navigate("/account"); // Redireciona para a página Account
  };
  const handlePaymentClick = () => {
    navigate("/payment"); // Redireciona para a página Payment
  };
  const handleOrderClick = () => {
    navigate("/order"); // Redireciona para a página Order
  };

  useEffect(() => {
    // Atualiza o título da página ou pode ser usado para outros efeitos colaterais
    document.title = "My Account";
  }, []);

  return (
    <div className="account-container">
      <section className="account-info">
        <div className="account-card">
          <div className="account-method">
            <h6>
              <strong>Gerenciar minha conta</strong>
            </h6>
            <div className="account-p">
              {/* "My Profile" com hover e estilo vermelho quando estiver na página /account */}
              <p
                className="profile-option"
                onClick={handleProfileClick}
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
                style={{
                  fontWeight: isProfileHovered ? "bold" : "normal", // Negrito ao passar o mouse
                  color: isOnProfilePage ? "blue" : "black", // Vermelho quando na página /account
                  cursor: "pointer",
                }}
              >
                Meu perfil
              </p>

              {/* "My Payment Options" com hover e estilo */}
              <p
                className="payment-option"
                onClick={handlePaymentClick}
                onMouseEnter={() => setIsPaymentHovered(true)}
                onMouseLeave={() => setIsPaymentHovered(false)}
                style={{
                  fontWeight: isPaymentHovered ? "bold" : "normal", // Negrito ao passar o mouse
                  color: isOnPaymentPage ? "blue" : "black", // Vermelho quando na página /payment
                  cursor: "pointer",
                }}
              >
                Minhas opções de pagamento
              </p>
            </div>
            <p
              className="order-option"
              onClick={handleOrderClick}
              onMouseEnter={() => setIsOrderHovered(true)}
              onMouseLeave={() => setIsOrderHovered(false)}
              style={{
                fontWeight: isOrderHovered ? "bold" : "normal", // Negrito ao passar o mouse
                color: isOnOrderPage ? "blue" : "black", // Vermelho quando na página /order
                cursor: "pointer",
              }}
            >
              Minhas compras
            </p>
            <br />
          </div>
        </div>
      </section>

      <section className="account-form">
        <h4 className="profile-title">Edit Your Profile</h4>

        <form className="form-a" onSubmit={handleSubmit}>
          <div className="form-group-a">
            <div className="input-container">
              <label htmlFor="firstname">Nome</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Nome"
                value={formData.firstname}
                onChange={handleChange}
                aria-label="Nome"
              />
              {errors.firstname && <p className="error-text">{errors.firstname}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="lastName">Sobrenome</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                value={formData.lastName}
                onChange={handleChange}
                aria-label="Sobrenome"
              />
              {errors.lastName && <p className="error-text">{errors.lastName}</p>}
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

            {/* <div className="input-container">
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                name="address"
                placeholder="Seu endereço"
                value={formData.address}
                onChange={handleChange}
                aria-label="Seu endereço"
              />
              {errors.address && <p className="error-text">{errors.address}</p>}
            </div> */}
          </div>

          <div className="form-group-pass">
            <div className="input-container">
              <label htmlFor="email">Password Changes</label>
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
            </div>
          </div>

          <div className="form-group-pass">
            <div className="input-container">
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
            </div>
          </div>

          <div className="form-group-pass">
            <div className="input-container">
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
              Cancel
            </button>

            <button type="submit" className="save">
              Salvar mudanças
            </button>
          </div>
        </form>
      </section>
    </div>
  );

  // Funções de validação e manipulação de formulários
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function validate() {
    const newErrors = {};
    const nameRegex = /^[A-Za-z]{3,}$/;
    if (!nameRegex.test(formData.firstname)) {
      newErrors.firstname = "O nome deve conter pelo menos 3 caracteres e apenas letras.";
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "O sobrenome deve conter pelo menos 3 caracteres e apenas letras.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido com '@' e '.com'.";
    }

    const addressRegex = /^([^,]+),\s*(\d+),\s*([^,]+)$/;
    if (!addressRegex.test(formData.address)) {
      newErrors.address = "O endereço deve estar no formato: 'Rua, número, estado'.";
    }

    if (formData.currentPassword.length < 5) {
      newErrors.currentPassword = "A senha atual deve ter no mínimo 5 caracteres.";
    }
    if (formData.newPassword.length < 5) {
      newErrors.newPassword = "A nova senha deve ter no mínimo 5 caracteres.";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      // Submit logic here (ex: enviar para um servidor)
      console.log("Formulário enviado com sucesso!", formData);
    }
  }

  function handleCancel() {
    setFormData({
      firstname: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({});
  }
};

export default Account;
