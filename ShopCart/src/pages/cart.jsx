import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cartSlice";

import "../styles/cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.items);

  // empty cart
  if (CartItems.length === 0) {
    return <h2 className="cart-title">Your cart is empty</h2>;
  }

  // total price
  // ✅ Total price (FIXED)
  const totalPrice = CartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // ✅ Total items
  const totalItems = CartItems.reduce((acc, item) => acc + item.quantity, 0);
  // checkout
  const handleSingleCheckout = (item) => {
    alert(`Order placed for ${item.title} 🎉`);

    // sirf ye product remove hoga
    dispatch(removeCart(item.id));
  };
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {CartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p className="cart-price">₹ {item.price}</p>

            <div className="qty-controls">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>

            {/* ✅ NEW Buy Now */}
            <button
              className="buy-btn"
              onClick={() => handleSingleCheckout(item)}
            >
              Buy Now
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      {/* ✅ Summary Section */}
      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>
        <h2>Total Price: ₹ {totalPrice}</h2>

        <div className="cart-actions">
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
