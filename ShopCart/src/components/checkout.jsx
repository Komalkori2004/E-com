import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCart, clearCart } from "../redux/cartSlice";

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
      <h2>Checkout</h2>

      {/* 🔹 Single Product */}
      {product && (
        <>
          <img src={product.image} width="150" />
          <h3>{product.title}</h3>
          <p>Price: ₹ {product.price}</p>
          <p>Qty: {product.quantity}</p>
        </>
      )}

      {/* 🔹 Multiple Products */}
      {cart &&
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} width="100" />
            <h4>{item.title}</h4>
            <p>₹ {item.price} × {item.quantity}</p>
          </div>
        ))}

      <h2>Total: ₹ {totalPrice}</h2>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckOut;