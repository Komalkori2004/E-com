import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import CheckOut from "./components/checkout";
import ProtectRoute from "./components/protectRoute";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
  path="/home"
  element={
    <ProtectRoute>
      <Home />
    </ProtectRoute>
  }
/>
          <Route path="/cart" element={<Cart/>} />
           <Route path="/checkout" element={<CheckOut/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
