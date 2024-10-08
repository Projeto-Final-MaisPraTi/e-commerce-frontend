import "./Account.css";
import useLanguage from "../../utils/useLanguage";
import { useState } from "react";

const Account = () => {
  const { translations } = useLanguage();

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

  const validate = () => {
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
    if (formData.confirmPassword.length < 5) {
      newErrors.confirmPassword = "A confirmação da senha deve ter no mínimo 5 caracteres.";
    }
    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "A nova senha deve ser diferente da senha atual.";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert(
        "Não foi possível salvar as atualizações. Corrija os dados inseridos e tente novamente.",
      );
      return;
    }
    alert("Atualizações salvas com sucesso.");
  };

  const handleCancel = () => {
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
  };

  return (
    <div className="account-container">
      <section className="account-info">
        <div className="account-card">
          <div className="account-method">
            <h6>
              <strong>{translations.account.account}</strong>
            </h6>
            <div className="account-p">
              <p>{translations.account.profile}</p>
              <p>{translations.account.address}</p>
              <p>{translations.account.payment}</p>
            </div>
            <br />
          </div>
          <div className="account-method">
            <h6>
              <strong>{translations.account.orders}</strong>
            </h6>
            <div className="account-p">
              <p>{translations.account.returns}</p>
              <p>{translations.account.cancellations}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="account-form">
        <h4 className="profile-title">Edit Your Profile</h4>

        <div form className="form-a" onSubmit={handleSubmit}>
          <div className="form-group-a">
            <div className="input-container">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder={translations.account.formLabels.firstname}
                value={formData.firstname}
                onChange={handleChange}
                aria-label={translations.account.formLabels.firstname}
              />
              {errors.firstname && <p className="error-text">{errors.firstname}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder={translations.account.formLabels.lastname}
                value={formData.lastName}
                onChange={handleChange}
                aria-label={translations.account.formLabels.lastname}
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
                placeholder={translations.account.formLabels.email}
                value={formData.email}
                onChange={handleChange}
                aria-label={translations.account.formLabels.email}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                placeholder={translations.account.formLabels.address}
                value={formData.address}
                onChange={handleChange}
                aria-label={translations.account.formLabels.address}
              />
              {errors.address && <p className="error-text">{errors.address}</p>}
            </div>
          </div>

          <div className="form-group-pass">
            <div className="input-container">
              <label htmlFor="email">Password Changes</label>
              <input
                id="currentPassword"
                type="password"
                name="currentPassword"
                placeholder={translations.account.formLabels.CurrentPassword}
                value={formData.currentPassword}
                onChange={handleChange}
                aria-label={translations.account.formLabels.CurrentPassword}
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
                placeholder={translations.account.formLabels.NewPassword}
                value={formData.newPassword}
                onChange={handleChange}
                aria-label={translations.account.formLabels.NewPassword}
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
                placeholder={translations.account.formLabels.ConfirmPassword}
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-label={translations.account.formLabels.ConfirmPassword}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>

            <button type="submit" className="save">
              {translations.account.save}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
