import styles from "./Contact.module.css";
import phoneIcon from "../../assets/icon-phone.png";
import emailIcon from "../../assets/icon-mail.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

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
      newErrors.name = "O nome deve ter pelo menos 3 caracteres";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido";
    }
    const phoneRegex = /^[0-9]{10,}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "O número de telefone deve conter pelo menos 10 dígitos";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres";
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
    <div className={styles.contactContainer}>
      <section className={styles.contactInfo}>
        <div className={styles.contactCard}>
          <div className={styles.contactMethod}>
            <h3>
              <img src={phoneIcon} alt="Ícone de telefone" />
              Ligue Para Nós
            </h3>
            <p>Estamos disponíveis 24 horas por dia, 7 dias por semana.</p>
            <Link to="tel:+880011122222">+880011122222</Link>
          </div>
          <hr />
          <div className={styles.contactMethod}>
            <h3>
              <img src={emailIcon} alt="Ícone de email" />
              Escreva Para Nós
            </h3>
            <p>Preencha nosso formulário e entraremos em contato em até 24 horas.</p>
            <Link to="mailto:suport@example.com">support@exclusive.com</Link>
          </div>
        </div>
      </section>

      <section className={styles.contactForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                aria-label="Sei Nome"
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>

            <div className={styles.inputContainer}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu E-mail"
                value={formData.email}
                onChange={handleChange}
                aria-label="Seu E-mail"
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>

            <div className={styles.inputContainer}>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleChange}
                aria-label="Seu Telefone"
              />
              {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <textarea
                id="message"
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                aria-label="Campo vazio ou inválido"
              ></textarea>
              {errors.message && <p className={styles.errorText}>{errors.message}</p>}
            </div>
          </div>

          <button type="submit" className={styles.sendButton}>
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
