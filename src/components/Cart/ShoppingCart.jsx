import { useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import ps5control from "../../assets/ps5control.png";
import notebook from "../../assets/notebook.png";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Notebook", price: 550, quantity: 1, image: notebook },
    { id: 2, name: "PS5 Control", price: 550, quantity: 2, image: ps5control },
    { id: 3, name: "Notebook", price: 150, quantity: 1, image: notebook },
    { id: 4, name: "Notebook", price: 100, quantity: 1, image: notebook },
    // ... mais itens, se necessário
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Number(quantity) } : item)),
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      {/* Cabeçalhos da Tabela */}
      <div className="table-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Container para os produtos */}
      <div className="cart-items-container">
        <table className="cart-items">
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <button
                    className="remove-item"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </td>
                <td className="product-info">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <select
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
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botões de ação: Return to Shop e Update Cart */}
      <div className="cart-actions">
        <button className="return-button" onClick={() => console.log("Return to shop")}>
          Return To Shop
        </button>
        <button className="update-button" onClick={() => console.log("Update cart")}>
          Update Cart
        </button>
      </div>

      {/* Área do sistema de cupons e total do carrinho */}
      <div className="coupon-and-summary">
        {/* Área de cupons */}
        <div className="coupon-section">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        {/* Resumo do carrinho */}
        <div className="cart-summary">
          <h5>Cart Total</h5>
          <p>Subtotal: <span>${subtotal}</span></p>
          <hr />
          <p>Shipping: <span>Free</span></p>
          <hr />
          <p>Total: <span >${subtotal}</span></p>
          <Link to="/checkout">
            <button type="submit" className="cart-checkout-button">Procees to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
