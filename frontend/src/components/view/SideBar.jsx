import React, { useEffect } from "react";
import "../style/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../lib/message.lib";

const SideBar = () => {
  const users = useSelector((state) => state.messageSlicer.users);
  const disPatch = useDispatch();

  useEffect(() => {
    getUsers(disPatch);
  }, []);

  return (
    <div className="sidebar">
      {users.length === 0 && <h5>No Contacts</h5>}
      <div className="users">
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div className="contact">
                <img
                  className="contact-img"
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
