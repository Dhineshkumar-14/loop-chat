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
      <div className="login-container">
        <div className="login-formbox">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                onBlur={onBlur}
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="password"
                required
                name="password"
                onBlur={onBlur}
              />
              <i className="bx bxs-lock"></i>
            </div>
            <button className="btn" onClick={onLogin}>
              Login{" "}
            </button>
            <p>
              {" "}
              don't have an account?{" "}
              <strong>
                <Link to={"/signup"}>signup</Link>
              </strong>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
