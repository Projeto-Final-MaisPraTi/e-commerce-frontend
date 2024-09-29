import React, { useState } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import styles      from './register.module.css';
import useLanguage from "../../utils/useLanguage.jsx";
import Header      from "../../components/Header/Header.jsx";
import Footer      from "../../components/Footer/ComponentFooter.jsx";

const Register = () => {

  const { language, switchLanguage, translations } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (!name) {
      newErrors.name = translations.register.nameRequired;
      valid = false;
    }

    if (!email) {
      newErrors.email = translations.register.emailRequired;
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = translations.login.emailInvalid;
      valid = false;
    }

    if (!password) {
      newErrors.password = translations.register.passwordRequired;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({ name, email, password });
    }
  };
  
  return (
    <>
      <Header />

      <div className={styles.registerContainer}>
        <div className={styles.registerBox}>
          <h2 className={styles.createAccount}>{translations.register.createAccount}</h2>
          <p className={styles.enterDetails}>{translations.register.enterDetails}</p>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
          <input 
              type="name" 
              placeholder="Name" 
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
              placeholder={translations.login.password} 
              className={styles.loginInputPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}

            <button type="submit" className={styles.buttonCreateAccount}>{translations.register.buttonCreateAccount}</button>
          </form>
          
          <p className={styles.haveAccount}>{translations.register.haveAccount}<a href="/login">{translations.register.login}</a></p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
