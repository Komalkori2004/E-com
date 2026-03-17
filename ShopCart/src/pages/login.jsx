import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    if(!form.email ||!form.password){
      setError("All Fields requird ")
      return
    }
    if(form.password.length<6){
      setError("Password must be at least 6 characters")
        
    }
    dispatch(login(form));
    navigate("/home");
  };

  return (
    <>
   <div className="login-box">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
    </>
  );
};

export default Login;
