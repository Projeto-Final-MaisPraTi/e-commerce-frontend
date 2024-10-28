import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import icon_cancel_cart from "../../assets/icon_cancel_cart.png";
import galaxy_s23 from "../../assets/phones/Samsung_Galaxy_S23_black_1.png";
import Fitbit_Versa3 from "../../assets/smartwatches/Fitbit_Versa3_black_1.png";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Samsung Galaxy S23", price: 550, quantity: 1, image: galaxy_s23 },
    { id: 2, name: "FitBit Versa 3", price: 550, quantity: 2, image: Fitbit_Versa3 },
    { id: 3, name: "Samsung Galaxy S23", price: 150, quantity: 1, image: galaxy_s23 },
    { id: 4, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 5, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 6, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 7, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 8, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 9, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 10, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
    { id: 11, name: "Samsung Galaxy S23", price: 100, quantity: 1, image: galaxy_s23 },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Number(quantity) } : item)),
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalWithDiscount = subtotal - discount;

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); // Aplica 10% de desconto
    } else {
      setDiscount(0);
      alert("Cupom inválido.");
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
                <td>${item.price}</td>
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
          Subtotal: <span>${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Desconto: <span>${discount.toFixed(2)}</span>
        </p>
        <hr />
        <p>
          Total Atualizado: <span>${totalWithDiscount.toFixed(2)}</span>
        </p>
        <hr />
        <div className={styles.couponSection}>
          <input
            type="text"
            placeholder="Coupon Code"
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
