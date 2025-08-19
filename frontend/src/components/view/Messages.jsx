import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../lib/message.lib";
import "../style/Messages.css";

const Messages = () => {
  const messages = useSelector((state) => state.messageSlicer.messages);
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const disPatch = useDispatch();

  useEffect(() => {
    getMessages(selectedUser, disPatch);
  }, [selectedUser]);

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
        {messages.map((message) => {
          return (
            <div
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
              {/* {message.image && (
                <div className="message-wraapper">
                  <img
                    src={message.image}
                    alt="message-image"
                    className="message-img"
                  />
                   <label>{message.text}</label>
                  <small>{getTime(message)}</small>
                </div>
              )}
              {message.text && (
                <div className="message-wraapper">
                 {" "}
                  <small>{getTime(message)}</small>
                </div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
