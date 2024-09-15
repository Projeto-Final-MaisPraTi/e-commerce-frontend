import "./Contact.css";
import phoneIcon from "../../assets/icons-phone.png";
import emailIcon from "../../assets/icons-mail.png";
import useLanguage from "../../utils/useLanguage";
import { useState } from "react";

const Contact = () => {
  const { translations } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      newErrors.name = translations.contact.formErrors.invalidName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = translations.contact.formErrors.invalidEmail;
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
    <div className="contact-container">
      <section className="contact-info">
        <div className="contact-card">
          <div className="contact-method">
            <h3>
              <img src={phoneIcon} alt="Ícone de telefone" />
              {translations.contact.callToUs}
            </h3>
            <p>{translations.contact.availability}</p>
            <p>{translations.contact.phone}</p>
          </div>
          <hr />
          <div className="contact-method">
            <h3>
              <img src={emailIcon} alt="Ícone de email" />
              {translations.contact.writeToUs}
            </h3>
            <p>{translations.contact.formResponse}</p>
            <p>{translations.contact.emails}</p>
            <p>{translations.contact.supportEmail}</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <input
                id="name"
                type="text"
                name="name"
                placeholder={translations.contact.formLabels.name}
                value={formData.name}
                onChange={handleChange}
                aria-label={translations.contact.formLabels.name}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="input-container">
              <input
                id="email"
                type="email"
                name="email"
                placeholder={translations.contact.formLabels.email}
                value={formData.email}
                onChange={handleChange}
                aria-label={translations.contact.formLabels.email}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-container">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder={translations.contact.formLabels.phone}
                value={formData.phone}
                onChange={handleChange}
                aria-label={translations.contact.formLabels.phone}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <textarea
                id="message"
                name="message"
                placeholder={translations.contact.formLabels.message}
                value={formData.message}
                onChange={handleChange}
                aria-label={translations.contact.formLabels.message}
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>

          <button type="submit" className="send-button">
            {translations.contact.sendMessage}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
