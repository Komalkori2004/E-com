import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import CheckOut from "./components/checkout";
import ProtectRoute from "./components/protectRoute";
import Success from "./pages/sucess";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
     
            <Route
            path="/cart"
            element={
              <ProtectRoute>
                <Cart />
              </ProtectRoute>
            }
          />
          
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/success" element={<Success />} />

        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
