import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    let newError = { ...error };

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        newError.email = "Invalid email";
      } else {
        delete newError.email;
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        newError.password = "Min 6 characters required";
      } else {
        delete newError.password;
      }
    }

    setError(newError);
  };

  const handleSubmit = () => {
    let newError = {};

    if (!form.email) newError.email = "Email required";
    if (!form.password) newError.password = "Password required";

    if (form.password && form.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      newError.email = "Invalid email format";
    }

    setError(newError);

    if (Object.keys(newError).length > 0) return;
    const userData = {
      ...form,
      id: Date.now(), // 👈 YE IMPORTANT HAI
    };

    dispatch(login(userData));
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>

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
        {error.email && <p className="error">{error.email}</p>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        {error.password && <p className="error">{error.password}</p>}

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
