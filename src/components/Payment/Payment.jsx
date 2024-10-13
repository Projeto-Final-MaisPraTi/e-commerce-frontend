import "./Payment.css";
import useLanguage from "../../utils/useLanguage";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cpf: "",
  });

  const [errors, setErrors] = useState({});
  const [savedCards, setSavedCards] = useState([]);
  const [isEditingIndex, setIsEditingIndex] = useState(null);
  const [isPaymentTitleHovered, setIsPaymentTitleHovered] = useState(false);
  const [isProfileTitleHovered, setIsProfileTitleHovered] = useState(false);

  useEffect(() => {
    const storedCards = localStorage.getItem("savedCards");
    if (storedCards) {
      setSavedCards(JSON.parse(storedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCards", JSON.stringify(savedCards));
  }, [savedCards]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se o campo for 'cardHolder', capitaliza as iniciais
    const formattedValue =
      name === "cardHolder"
        ? value
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
        : value;

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
    setErrors({
      ...errors,
      [name]: "",
    });

    // Formatação do campo de Expiry Date
    if (name === "expiryDate") {
      // Remove tudo exceto números
      const numericValue = value.replace(/\D/g, "");

      // Limita a entrada a 4 números, inserindo '/' automaticamente após os 2 primeiros números
      if (numericValue.length <= 4) {
        const formattedExpiry =
          numericValue.length > 2 ? `${numericValue.slice(0, 2)}/${numericValue.slice(2)}` : numericValue;

        setFormData((prev) => ({ ...prev, expiryDate: formattedExpiry }));
      }
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validação do número do cartão
    if (formData.cardNumber.length !== 16) {
      newErrors.cardNumber = "O número do cartão deve conter 16 dígitos.";
    }

    // Validação do nome do titular
    const isValidCardHolder = /^[A-Za-zÀ-ÿ\s]+$/.test(formData.cardHolder) && formData.cardHolder.trim().length >= 3;
    if (!isValidCardHolder) {
      newErrors.cardHolder = "O nome do titular deve conter pelo menos 3 letras e apenas letras.";
    }

    // Validação da data de validade
    const [month, year] = formData.expiryDate.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100; // Obtendo os dois últimos dígitos do ano atual
    const currentMonth = new Date().getMonth() + 1; // Meses vão de 0 a 11

    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Data de validade deve estar no formato MM/YY.";
    } else if (month < 1 || month > 12) {
      newErrors.expiryDate = "Mês inválido. Deve estar entre 01 e 12.";
    } else if (year < currentYear) {
      newErrors.expiryDate = "O cartão está fora da validade.";
    } else if (year === currentYear && month < currentMonth) {
      newErrors.expiryDate = "O cartão está fora da validade.";
    }

    // Validação do CPF
    if (!/^\d{11}$/.test(formData.cpf)) {
      newErrors.cpf = "O CPF deve conter 11 dígitos.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Corrija os dados inseridos e tente novamente.");
      return;
    }

    // Se estiver editando um cartão, atualizar o cartão existente
    if (isEditingIndex !== null) {
      const updatedCards = [...savedCards];
      updatedCards[isEditingIndex] = formData;
      setSavedCards(updatedCards);
      alert("Cartão atualizado com sucesso.");
      setIsEditingIndex(null); // Resetar índice de edição após atualização
    } else {
      // Adicionar um novo cartão
      if (savedCards.length < 2 || window.confirm("Você já tem 2 cartões salvos. Deseja substituir o cartão existente?")) {
        if (savedCards.length === 2) {
          const confirmDelete = window.confirm("Deseja substituir um cartão existente?");
          if (confirmDelete) {
            // Montar a mensagem de alerta com os últimos 4 dígitos dos cartões salvos
            const cardList = savedCards.map((card, index) => `Cartão ${index + 1}: **** **** **** ${card.cardNumber.slice(-4)}`).join('\n');
            const cardToReplaceIndex = prompt(`Digite o número do cartão a ser substituído:\n${cardList}`);
            const indexToReplace = parseInt(cardToReplaceIndex) - 1; // Ajustar o índice subtraindo 1
            if (indexToReplace >= 0 && indexToReplace < savedCards.length) {
              const updatedCards = [...savedCards];
              updatedCards[indexToReplace] = formData; // Substitui o cartão no índice indicado
              setSavedCards(updatedCards);
              alert("Cartão atualizado com sucesso.");
            } else {
              alert("Índice inválido.");
            }
          }
        } else {
          setSavedCards([...savedCards, formData]);
          alert("Cartão salvo com sucesso.");
        }
      } else {
        alert("Limite de cartões atingido. Para adicionar um novo cartão, exclua um cartão salvo.");
      }
    }

    // Resetar o formulário após salvar
    setFormData({
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cpf: "",
    });
  };


  const handleEditCard = (index) => {
    const cardToEdit = savedCards[index];
    setFormData(cardToEdit);
    setIsEditingIndex(index); // Armazenar o índice do cartão sendo editado
  };

  const handleDeleteCard = (index) => {
    if (window.confirm("Tem certeza de que deseja apagar este cartão?")) {
      const updatedCards = savedCards.filter((_, i) => i !== index);
      setSavedCards(updatedCards);
      alert("Cartão apagado com sucesso.");
    }
  };

  const handleCancel = () => {
    setFormData({
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cpf: "",
    });
    setErrors({});
    setIsEditingIndex(null); // Resetar o índice de edição
  };

  const isOnPaymentPage = location.pathname === "/payment";

  const handlePaymentClick = () => {
    navigate("/payment");
  };

  const handleProfileClick = () => {
    navigate("/account");
  };

  return (
    <div className="payment-container">
      <section className="payment-info">
        <div className="payment-card">
          <div className="payment-method">
            <h6><strong>{translations.account.account}</strong></h6>
            <div className="payment-p">
              <p
                className="profile-option"
                onClick={handleProfileClick}
                onMouseEnter={() => setIsProfileTitleHovered(true)}
                onMouseLeave={() => setIsProfileTitleHovered(false)}
                style={{
                  cursor: 'pointer',
                  fontWeight: isProfileTitleHovered ? 'bold' : 'normal',
                }}
              >
                {translations.account.profile}
              </p>
              <p>{translations.account.address}</p>
              <p
                className="payment-option"
                onClick={handlePaymentClick}
                onMouseEnter={() => setIsPaymentTitleHovered(true)}
                onMouseLeave={() => setIsPaymentTitleHovered(false)}
                style={{
                  cursor: 'pointer',
                  fontWeight: isOnPaymentPage ? 'normal' : isPaymentTitleHovered ? 'bold' : 'normal',
                  color: isOnPaymentPage ? 'red' : 'black',
                }}
              >
                {translations.account.payment}
              </p>
            </div>
            <br />
          </div>

          <div className="payment-method">
            <h6><strong>{translations.account.orders}</strong></h6>
            <div className="payment-p">
              <p>{translations.account.returns}</p>
              <p>{translations.account.cancellations}</p>
            </div>
          </div>
        </div>

      </section>
      <section className="payment-form">
        <h4 className="profile-title-p">Edit Your Payment Options</h4>

        <form
          className="form-p"
          onSubmit={handleSubmit}
        >
          <div className="form-group-p">
            <div className="input-container">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                placeholder="Enter your card number"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength="16"
                aria-label="Card Number"
              />
              {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="cardHolder">Card Holder Name</label>
              <input
                id="cardHolder"
                type="text"
                name="cardHolder"
                placeholder="Enter card holder's name"
                value={formData.cardHolder}
                onChange={handleChange}
                aria-label="Card Holder"
              />
              {errors.cardHolder && <p className="error-text">{errors.cardHolder}</p>}
            </div>
          </div>

          <div className="form-group-p">
            <div className="input-container">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                id="expiryDate"
                type="text"
                name="expiryDate"
                placeholder="MMYY"
                value={formData.expiryDate}
                onChange={handleChange}
                maxLength="5" // Limite de 5 para incluir a barra
                aria-label="Expiry Date"
              />
              {errors.expiryDate && <p className="error-text">{errors.expiryDate}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                placeholder="Enter your CPF"
                value={formData.cpf}
                onChange={handleChange}
                maxLength="11"
                aria-label="CPF"
              />
              {errors.cpf && <p className="error-text">{errors.cpf}</p>}
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>

            <button type="submit" className="save">
              {isEditingIndex !== null ? 'Update Card' : 'Save Card'}
            </button>
          </div>
        </form>

        <section className="saved-cards">
          <h4>Saved Cards ({savedCards.length}/2)</h4>
          {savedCards.length > 0 ? (
            <ul>
              {savedCards.map((card, index) => (
                <li key={index}>
                  {card.cardHolder} - Ending in {card.cardNumber.slice(-4)} - Expiry: {card.expiryDate}
                  <div>
                    <button className="edit-btn" onClick={() => handleEditCard(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteCard(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No cards saved yet.</p>
          )}
        </section>

      </section>
    </div>
  );
};

export default Payment;
