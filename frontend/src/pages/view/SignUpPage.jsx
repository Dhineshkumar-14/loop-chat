import React from "react";
import { Link } from "react-router-dom";
import "./../style/SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-formbox">
          <form>
            <h1>Signup</h1>
            <div className="input-box">
              <input type="text" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="password" required />
              <i className="bx bxs-lock"></i>
            </div>
            <button className="btn">Login </button>
            <p>
              {" "}
              Already have an account?{" "}
              <strong>
                <Link to={"/login"}>Login</Link>
              </strong>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
