import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "../styles/nav.css";
import { logout } from "../redux/userSlice";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);
   const user = useSelector((state) => state.user.user);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=()=>{
    dispatch(logout())
    navigate("/")
  }


  return (
     <nav className="navbar">
      <h2 className="logo">MyShop</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">{cartItems.length}</span>
        </Link>

        {/* ✅ User name show */}
        {user && <span>Hi, {user.name}</span>}

        {/* ✅ Logout button */}
        {user && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;