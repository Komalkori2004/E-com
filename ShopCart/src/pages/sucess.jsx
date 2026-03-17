import { useNavigate } from "react-router-dom"
import "../styles/success.css";

const Success=()=>{
const navigate=useNavigate()


return(<>

<div className="success-container">
  <div className="success-box">
        <h2>Order Placed 🎉</h2>
        <p>Your order has been successfully placed.</p>

        <button onClick={() => navigate("/home")}>
          Continue Shopping
        </button>
      </div>
</div>


</>)




}

export default Success