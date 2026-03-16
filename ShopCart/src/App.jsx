import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
