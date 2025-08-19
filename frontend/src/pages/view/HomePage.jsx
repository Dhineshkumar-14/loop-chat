import React from "react";
import "../style/HomePage.css";
import SideBar from "../../components/view/SideBar";
import ChatContainer from "../../components/view/ChatContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  setOnlineUSerVisiblity,
  setSelectedUser,
} from "../../store/slicers/MessageSlicer";

const HomePage = () => {
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const authUser = useSelector((state) => state.authUser.user);
  const onlineUsers = useSelector((state) => state.authUser.onlineUsersKeys);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedUser(null));
  };

  const onChangeHandler = (event) => {
    if (event.target.checked) {
      dispatch(setOnlineUSerVisiblity(true));
    } else {
      dispatch(setOnlineUSerVisiblity(false));
    }
  };

  return (
    <div className="homepage">
      <div className="homepage-navbar">
        <div className="title-header">
          <div className="title-container">
            <i className="fa-solid fa-user-group"></i>
            <h3>Contacts</h3>
          </div>
          <div className="filter-users">
            <input type="checkbox" onChange={onChangeHandler} />
            <h4>
              show online only{" "}
              <small>{`(${onlineUsers.length - 1} online)`}</small>
            </h4>
          </div>
        </div>
        {selectedUser && (
          <div className="chat-header">
            <div key={selectedUser._id} className="chat-user">
              <img
                className="chat-user-img"
                alt="user-img"
                src={
                  selectedUser.profilePic
                    ? selectedUser.profilePic
                    : require("../../resoruce/avatar.png")
                }
              ></img>
              <div className="chat-user-title">
                <h5>{selectedUser.fullName}</h5>
                <h6>offline</h6>
              </div>
            </div>
            <div className="close-icon-div">
              <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </div>
          </div>
        )}
      </div>
      <div className="homepage-maincontainer">
        <SideBar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default HomePage;
