import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../lib/auth.lib.js";
import "../style/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.user);

  const logoutHandler = async () => {
    logout(dispatch);
  };

  return (
    <div className="navbar">
      <div className="logo-section">
        <i className="bx  bx-message"></i>
        <Link to={"/"}>
          <h1>Loop Chat</h1>
        </Link>
      </div>
      <div className="user-menu">
        {authUser && (
          <>
            <Link to={"/profile"}>
              <div className="user-menuitem">
                <i className="bx  bxs-user"></i>
                <h4>Profile</h4>
              </div>
            </Link>
            <div className="user-menuitem" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <h4>Logout</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
