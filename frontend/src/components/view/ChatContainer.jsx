import React from "react";
import "../style/ChatContainer.css";
import { useSelector } from "react-redux";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

const ChatContainer = () => {
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
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
        <div className="chat-container-wrapper">
          <Messages />
          <ChatInput />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
