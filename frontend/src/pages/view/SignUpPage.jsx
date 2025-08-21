import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div class="login">
      <form>
        <h1>Sign Up</h1>

        <div class="input-box">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
            onBlur={onBlur}
          />
          <i class="fas fa-user"></i>
        </div>

        <div class="input-box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onBlur={onBlur}
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

        <button type="submit" class="btn" onClick={handleSubmit}>
          Create Account
        </button>

        <p class="signup-text">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
