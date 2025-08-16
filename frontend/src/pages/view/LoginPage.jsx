import React from "react";
import "./../style/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-formbox">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Email" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="password" required />
              <i className="bx bxs-lock"></i>
            </div>
            <button className="btn">Login </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
