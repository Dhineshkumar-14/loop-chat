import React from "react";
import "../style/ChatContainer.css";
import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { setSelectedUser } from "../../store/slicers/MessageSlicer";

const ChatContainer = () => {
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const authUser = useSelector((state) => state.authUser.user);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedUser(null));
  };

  return (
    <div className="chat-container">
      {!selectedUser && (
        <div className="empty-chat-container">
          <div className="loopchat-icon-div">
            <i className="bx  bx-message"></i>
          </div>
          <h3>Welcome to LoopChat</h3>
          <h5>Select a conversation from the sidebar to start chatting</h5>
        </div>
      )}
      {selectedUser && (
        <>
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
                <h6>
                  {selectedUser._id === authUser._id ? "Online" : "Offline"}
                </h6>
              </div>
            </div>
            <div className="close-icon-div">
              <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </div>
          </div>
          <Messages />
          <ChatInput />
        </>
      )}
    </div>
  );
};

export default ChatContainer;
