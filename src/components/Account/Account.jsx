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
    passwordChanges: "",
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
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = translations.account.formErrors.invalidName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = translations.account.formErrors.invalidEmail;
    }
    const phoneRegex = /^[0-9]{10,}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = translations.contact.formErrors.invalidPhone;
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = translations.contact.formErrors.shortMessage;
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="account-container">
      <section className="account-info">
        <div className="account-card">
          <div className="account-method">
            <h6><strong>{translations.account.account}</strong></h6>
            <div className="account-p">
              <p >{translations.account.profile}</p>
              <p>{translations.account.address}</p>
              <p>{translations.account.payment}</p>
            </div>
          </div>
          <div className="account-method">
            <h6><strong>{translations.account.orders}</strong></h6>
            <div className="account-p">
              <p>{translations.account.returns}</p>
              <p>{translations.account.cancellations}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="account-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <input
                id="name"
                type="text"
                name="name"
                placeholder={translations.account.formLabels.firstname}
                value={formData.name}
                onChange={handleChange}
                aria-label={translations.account.formLabels.name}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="input-container">
              <input
                id="email"
                type="email"
                name="email"
                placeholder={translations.account.formLabels.lastname}
                value={formData.email}
                onChange={handleChange}
                aria-label={translations.account.formLabels.email}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-container">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder={translations.account.formLabels.email}
                value={formData.phone}
                onChange={handleChange}
                aria-label={translations.account.formLabels.email}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="size"> <textarea
                id="message"
                name="message"
                placeholder={translations.account.formLabels.address}
                value={formData.message}
                onChange={handleChange}
                aria-label={translations.account.formLabels.address}
              ></textarea> </div>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>


          <div className="form-group">
            <div className="input-container">
              <div className="size"> <textarea
                id="message"
                name="message"
                placeholder={translations.account.formLabels.password}
                value={formData.message}
                onChange={handleChange}
                aria-label={translations.account.formLabels.password}
              ></textarea> </div>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="size"> <textarea
                id="message"
                name="message"
                placeholder={translations.account.formLabels.password}
                value={formData.message}
                onChange={handleChange}
                aria-label={translations.account.formLabels.password}
              ></textarea> </div>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="size"> <textarea
                id="message"
                name="message"
                placeholder={translations.account.formLabels.password}
                value={formData.message}
                onChange={handleChange}
                aria-label={translations.account.formLabels.password}
              ></textarea> </div>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>


          <button type="submit" className="save">
            {translations.account.save}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Account;
