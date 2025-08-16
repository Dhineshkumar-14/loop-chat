import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/SignUpPage.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signup } from "../../lib/auth.lib";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
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
      } else if (event.target.name === "fullName") {
        return {
          ...prev,
          fullName: event.target.value,
        };
      }
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    )
      return toast.error("Invalid Email Format");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.trim().length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData, dispatch);
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-formbox">
          <form>
            <h1>Signup</h1>
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
                placeholder="Full Name"
                required
                name="fullName"
                onBlur={onBlur}
              />
              <i className="bx bxs-user"></i>
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
            <button className="btn" onClick={handleSubmit}>
              {" "}
              Create Account{" "}
            </button>
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
