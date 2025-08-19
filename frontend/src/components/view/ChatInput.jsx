import React, { useRef, useState } from "react";
import "../style/ChatInput.css";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../lib/message.lib";

const ChatInput = () => {
  const [message, setMessage] = useState({});
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const imageRef = useRef();

  const setText = (event) => {
    setMessage((prev) => {
      return {
        ...prev,
        text: event.target.value,
      };
    });
  };

  const setImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setMessage((prev) => {
        return {
          ...prev,
          image: base64Image,
        };
      });
    };
  };

  const imageOnclickHandler = () => {
    const fileInput = document.getElementById("img-input");
    fileInput.click();
  };

  const send = () => {
    if (!message.text && !message.image) {
      return;
    }
    sendMessage(selectedUser, message, dispatch);
    setMessage({});
    inputRef.current.value = "";
    imageRef.current.value = "";
  };

  const onClose = () => {
    setMessage((prev) => {
      return {
        ...prev,
        image: "",
      };
    });
    imageRef.current.value = "";
  };

  return (
    <div className="chatinput">
      {message.image && (
        <div className="img-preview">
          <div className="closeicon-div" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <img alt="preview-image" src={message.image} />
        </div>
      )}
      <div className="chatinput-container">
        <input
          ref={inputRef}
          className="chatinput-input"
          onBlur={setText}
          placeholder="Type a message...."
        ></input>
        <input ref={imageRef} type="file" id="img-input" onChange={setImage} />
        <i className="fa-solid fa-image" onClick={imageOnclickHandler}></i>
        <i className="ri-send-plane-fill" onClick={send}></i>
      </div>
    </div>
  );
};

export default ChatInput;
