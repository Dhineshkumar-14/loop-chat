import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateSelectedUser } from "../../lib/message.lib";
import "../style/Sidebar.css";

const SideBar = () => {
  const users = useSelector((state) => state.messageSlicer.users);
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const disPatch = useDispatch();

  useEffect(() => {
    getUsers(disPatch);
  }, []);

  const setSelectUser = (user) => {
    updateSelectedUser(user, disPatch);
  };

  return (
    <div className="sidebar">
      {users.length === 0 && <h5>No Contacts</h5>}
      <div className="users">
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div
                key={user._id}
                className={`contact ${
                  user._id === selectedUser?._id ? " contactactive" : ""
                }`}
                onClick={() => {
                  setSelectUser(user);
                }}
              >
                <img
                  className="contact-img"
                  alt="user-img"
                  src={
                    user.profilePic
                      ? user.profilePic
                      : require("../../resoruce/avatar.png")
                  }
                ></img>
                <div className="contact-title">
                  <h5>{user.fullName}</h5>
                  <h6>offline</h6>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
