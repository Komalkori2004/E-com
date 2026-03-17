import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, clearCart } from "../redux/cartSlice";
import "../styles/chekout.css";
import { addOrder } from "../redux/orderSlice";

const CheckOut = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const product = location.state?.product;
  const cart = location.state?.cart;

  if (!product && !cart) {
    return <h2>No Items Selected</h2>;
  }

  const totalPrice = product
    ? product.price * product.quantity
    : cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ order handle
  const handleOrder = () => {
    const orderData = {
      userId: user?.id, 
      items: product ? [product] : cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    dispatch(addOrder(orderData)); 

    if (product) {
      dispatch(removeCart(product.id));
    }

    if (cart) {
      dispatch(clearCart());
    }

    navigate("/success");
  };
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Checkout</h2>
        <img src={product?.image || cart[0]?.image} />

        <h3>{product.title}</h3>

        <div className="checkout-details">
          <p>
            <span>Price:</span> <span>₹ {product.price}</span>
          </p>
          <p>
            <span>Qty:</span> <span>{product.quantity}</span>
          </p>
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
