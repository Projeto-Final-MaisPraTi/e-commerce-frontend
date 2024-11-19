import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./ShoppingCart.module.css";
import icon_cancel_cart from "../../assets/icon_cancel_cart.png";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/itemcart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log("Resposta ao buscar produtos do carrinho no backend:", response.data.items);
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Erro ao buscar itens do carrinho: ", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const fetchValidCoupon = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/coupons/valid`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log("Resposta ao buscar cupom no backend: ", response.data);
        if (response.data) {
          console.log("Cupom válido:", response.data);
          setCoupon(response.data.codigo);
          setDiscount(response.data.desconto_porcentagem / 100);
        }
      } catch (error) {
        console.error("Erro ao buscar cupom válido: ", error);
      }
    };

    fetchValidCoupon();
  }, []);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Number(quantity) } : item)),
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const totalWithDiscount = subtotal - discountAmount;

  const applyCoupon = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/coupons/mark-used`,
        { codigo: coupon },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (response.data.valid) {
        setDiscount(response.data.desconto_porcentagem / 100);
      } else {
        setDiscount(0);
        alert("Cupom inválido.");
      }
    } catch (error) {
      console.error("Erro ao aplicar cupom: ", error);
      setDiscount(0);
      alert("Erro ao aplicar cupom.");
    }
  };

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.cartItemsContainer}>
        <table className={styles.cartItems}>
          <thead>
            <tr>
              <th>Remover</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={icon_cancel_cart}
                    alt="Remove item icon"
                    className={styles.removeItem}
                    aria-label={`Remover ${item.name}`}
                    onClick={() => removeItem(item.id)}
                  />
                </td>
                <td className={styles.productInfo}>
                  <img src={item.image} alt={item.name} className={styles.cartProductImage} />
                  <span>{item.name}</span>
                </td>
                <td>R$ {item.price.toFixed(2)}</td>
                <td>
                  <select
                    className={styles.quantitySelector}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.cartSummary}>
        <h5>Resumo do carrinho</h5>
        <hr />
        <p>
          Subtotal: <span>R$ {subtotal.toFixed(2)}</span>
        </p>
        <p>
          Desconto: <span>R$ {discountAmount.toFixed(2)}</span>
        </p>
        <hr />
        <p>
          Total Atualizado: <span>R$ {totalWithDiscount.toFixed(2)}</span>
        </p>
        <hr />
        <div className={styles.couponSection}>
          <input
            type="text"
            placeholder="Código do Cupom"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon}>Aplicar cupom</button>
        </div>
        <Link to="/checkout">
          <button type="submit" className={styles.cartCheckoutButton}>
            Prosseguir para pagamento
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
