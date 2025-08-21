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
    <div class="login">
      <form>
        <h1>Login</h1>

        <div class="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            onBlur={onBlur}
            name="email"
          />
          <i class="fas fa-envelope"></i>
        </div>

        <div class="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            onBlur={onBlur}
            name="password"
          />
          <i class="fas fa-lock"></i>
        </div>

        <button type="submit" class="btn" onClick={onLogin}>
          Sign In
        </button>

        <p class="signup-text">
          Don’t have an account? <Link to={"/signup"}>signup</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
