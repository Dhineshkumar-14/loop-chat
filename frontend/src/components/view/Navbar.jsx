import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <i className="bx  bx-message"></i>
        <h1>Loop Chat</h1>
      </div>
      <div className="user-menu">
        <div className="user-menuitem">
          <i className="bx  bxs-cog"></i>
          <h4>Settings</h4>
        </div>
        <div className="user-menuitem">
          <i className="bx  bxs-user"></i>
          <h4>Profile</h4>
        </div>
        <div className="user-menuitem">
          <i class="bx bxs-exit"></i>
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
