import ChatContainer from "../../components/view/ChatContainer";
import SideBar from "../../components/view/SideBar";
import "../style/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <SideBar />
      <ChatContainer />
    </div>
  );
};

export default HomePage;
