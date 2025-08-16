import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { axiosInstance } from "../../lib/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slicers/AuthSlicer";
import { logout } from "../../lib/auth.lib.js";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = () => {
    navigate("/profile");
  };

  const logoutHandler = async () => {
    logout(dispatch);
  };

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
        <div className="user-menuitem" onClick={profile}>
          <i className="bx  bxs-user"></i>
          <h4>Profile</h4>
        </div>
        <div className="user-menuitem" onClick={logoutHandler}>
          <i className="bx bxs-exit"></i>
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
