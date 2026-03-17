import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/home.css";
import axios from "axios";
import { addToCart } from "../redux/cartSlice";

const Home = () => {
  const [product, setproduct] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproduct(res.data);
    });
  }, []);

  return (
    <>
      <div className="home-container">
        {product.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <button
              onClick={() => {
                if (!user) {
                  alert("Please login first");
                  return;
                }

                dispatch(
                  addToCart({
                    ...p,
                    userId: user.id,
                  }),
                );
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
