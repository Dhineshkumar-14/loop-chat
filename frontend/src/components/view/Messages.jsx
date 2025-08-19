import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessages,
  subscribeToMessages,
  unSubscribeToMessages,
} from "../../lib/message.lib";
import "../style/Messages.css";

const Messages = () => {
  const messages = useSelector((state) => state.messageSlicer.messages);
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const disPatch = useDispatch();
  const messageEndRef = useRef();

  // Fetch messages & subscribe only when selectedUser changes
  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser, disPatch);
      subscribeToMessages(disPatch);
    }
    return () => unSubscribeToMessages(disPatch);
  }, [selectedUser, disPatch]);

  // Auto-scroll when new messages arrive (only if near bottom)
  useEffect(() => {
    if (!messageEndRef.current || !messages.length) return;

    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getTime = (message) => {
    const createdAt = new Date(message.createdAt);
    return createdAt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="message-container">
      <div className="message-scroll-div">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`message-div ${
              message.senderId === selectedUser._id ? "chatstart" : "chatend"
            }`}
          >
            <div className="message-wraapper">
              {message.image && (
                <img
                  src={message.image}
                  alt="message-image"
                  className="message-img"
                />
              )}
              {message.text && <label>{message.text}</label>}
              {(message.image || message.text) && (
                <small>{getTime(message)}</small>
              )}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default Messages;
