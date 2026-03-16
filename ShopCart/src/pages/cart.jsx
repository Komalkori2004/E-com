import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../redux/cartSlice";
import "../styles/cart.css"
const Cart = () => {

  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.items);

  if (CartItems.length === 0) {
    return <h2 className="cart-title">Your cart is empty</h2>;
  }

  const total = CartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">

      <h2 className="cart-title">Shopping Cart</h2>

      {CartItems.map((item) => (
        <div className="cart-item" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p className="cart-price">${item.price}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeCart(item.id))}
          >
            Remove
          </button>

        </div>
      ))}

      <h2 className="cart-total">
        Total: ${total}
      </h2>

    </div>
  );
};

export default Cart;