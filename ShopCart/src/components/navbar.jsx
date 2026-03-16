import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/nav.css";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">

      <h2 className="logo">MyShop</h2>

      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">
            {cartItems.length}
          </span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;