import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cartSlice";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CartItems = useSelector((state) => state.cart.items);

  // 🟡 empty cart
  if (CartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your cart is empty 🛒</h2>
      </div>
    );
  }

  // 💰 total price
  const totalPrice = CartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 📦 total items
  const totalItems = CartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // 🔘 checkout full cart
  const handleCheckout = () => {
    navigate("/checkout", { state: { cart: CartItems } });
  };

  // 🔘 single product checkout
  const handleSingleCheckout = (item) => {
    navigate("/checkout", { state: { product: item } });
  };

  return (
    <div className="cart-container">
      <div className="cart-layout">

        {/* 🔹 LEFT SIDE */}
        <div className="cart-items">
          {CartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p className="cart-price">₹ {item.price}</p>

                {/* ➕➖ qty */}
                <div className="qty-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>
                    +
                  </button>
                </div>

                {/* 🔘 buy now */}
                <button
                  className="buy-btn"
                  onClick={() => handleSingleCheckout(item)}
                >
                  Buy Now
                </button>
              </div>

              {/* ❌ remove */}
              <button
                className="remove-btn"
                onClick={() => dispatch(removeCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="cart-summary">
          <h3>Total Items: {totalItems}</h3>
          <h2>Total: ₹ {totalPrice}</h2>

          <div className="cart-actions">
            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;