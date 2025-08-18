import React from "react";
import "../style/HomePage.css";
import SideBar from "../../components/view/SideBar";
import ChatContainer from "../../components/view/ChatContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-navbar">
        <div className="title-container">
          <i class="fa-solid fa-user-group"></i>
          <h3>Contacts</h3>
        </div>
        <div className="filter-users">
          <input type="radio" />
          <h4>
            Show online only <small>{`(1 online)`}</small>
          </h4>
        </div>
      </div>
      <div className="homepage-maincontainer">
        <SideBar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default HomePage;
