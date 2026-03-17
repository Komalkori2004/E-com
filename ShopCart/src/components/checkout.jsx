import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCart, clearCart } from "../redux/cartSlice";
import "../styles/chekout.css";
const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = location.state?.product;
  const cart = location.state?.cart;

  // ❌ agar kuch bhi nahi aaya
  if (!product && !cart) {
    return <h2>No Items Selected</h2>;
  }

  // ✅ total calculate
  const totalPrice = product
    ? product.price * product.quantity
    : cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ order handle
  const handleOrder = () => {
    alert("Order placed successfully 🎉");

    if (product) {
      dispatch(removeCart(product.id)); // single remove
    }

    if (cart) {
      dispatch(clearCart()); // full cart clear
    }

    navigate("/home");
  };

  return (
   <div className="checkout-container">
  <div className="checkout-card">

    <h2>Checkout</h2>

    <img src={product.image} />

    <h3>{product.title}</h3>

    <div className="checkout-details">
      <p><span>Price:</span> <span>₹ {product.price}</span></p>
      <p><span>Qty:</span> <span>{product.quantity}</span></p>
    </div>

    <p className="checkout-total">Total: ₹ {totalPrice}</p>

    <button className="checkout-btn" onClick={handleOrder}>
      Place Order
    </button>

  </div>
</div>
  );
};

export default CheckOut;