import React, { useEffect, useRef, useState } from "react";
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
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  // Fetch messages & subscribe only when selectedUser changes
  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser, disPatch);
      subscribeToMessages(disPatch);
    }
    return () => unSubscribeToMessages(disPatch);
  }, [selectedUser, messages]);

  // Detect if user is at bottom
  const handleScroll = () => {
    const el = messagesContainerRef.current;
    const isAtBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 5;
    setAutoScroll(isAtBottom);
  };

  // Scroll to bottom only if autoScroll is true
  const scrollToBottom = () => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom();
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
      <div
        className="message-scroll-div"
        ref={messagesContainerRef}
        onScroll={handleScroll}
      >
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
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Messages;
