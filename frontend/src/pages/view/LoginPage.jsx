import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../lib/auth.lib";
import "./../style/LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const onBlur = (event) => {
    setFormData((prev) => {
      if (event.target.name === "email") {
        return {
          ...prev,
          email: event.target.value,
        };
      } else if (event.target.name === "password") {
        return {
          ...prev,
          password: event.target.value,
        };
      }
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    login(formData, dispatch);
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            onBlur={onBlur}
            name="email"
          />
          <i className="fas fa-envelope"></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            onBlur={onBlur}
            name="password"
          />
          <i className="fas fa-lock"></i>
        </div>

        <button type="submit" className="btn" onClick={onLogin}>
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <Link to={"/signup"}>signup</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
