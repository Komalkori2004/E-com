import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import '../styles/home.css'
import axios from "axios";
import { addToCart } from "../redux/cartSlice";


const Home = () => {
  const [product, setproduct] = useState([]);
   const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {setproduct(res.data)});
  }, []);

  return (
    <>
    <div className="home-container">
  {product.map((p) => (
    <div className="product-card" key={p.id}>
      <img src={p.image} alt={p.title} />
      <h3>{p.title}</h3>
      <p>${p.price}</p>
      <button onClick={() => dispatch(addToCart(p))}>
        Add To Cart
      </button>
    </div>
  ))}
</div>
    </>
  );
};

export default Home;
