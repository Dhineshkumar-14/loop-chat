import React from "react";
import "./../style/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-formbox">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="password" required />
              <i className="bx bxs-lock"></i>
            </div>
            <button className="btn">Login </button>
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
