import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateSelectedUser } from "../../lib/message.lib";
import "../style/Sidebar.css";
import { setOnlineUSerVisiblity } from "../../store/slicers/MessageSlicer";

const SideBar = () => {
  const users = useSelector((state) => state.messageSlicer.users);
  const onlineUsers = useSelector((state) => state.authUser.onlineUsersKeys);
  const selectedUser = useSelector((state) => state.messageSlicer.selectedUser);
  const isShowOnlineUserOnly = useSelector(
    (state) => state.messageSlicer.isShowOnlineUserOnly
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  const onChangeHandler = (event) => {
    if (event.target.checked) {
      dispatch(setOnlineUSerVisiblity(true));
    } else {
      dispatch(setOnlineUSerVisiblity(false));
    }
  };

  const filteredUsers = isShowOnlineUserOnly
    ? users.filter((user) => {
        return onlineUsers.includes(user._id);
      })
    : users;
  const setSelectUser = (user) => {
    updateSelectedUser(user, dispatch);
  };
  return (
    <div className="sidebar">
     <div className="sidebar-title">
       <div className="title-container">
        <i className="fa-solid fa-user-group"></i>
        <h3>Contacts</h3>
      </div>
      <div className="filter-users">
        <input type="checkbox" onChange={onChangeHandler} />
        <h4>
          show online only <small>{`(${onlineUsers.length - 1} online)`}</small>
        </h4>
      </div>
     </div>
      {users.length === 0 && <h5>No Contacts</h5>}
      <div className="users">
        {filteredUsers.length > 0 &&
          filteredUsers.map((user) => {
            return (
              <div
                key={user._id}
                className={`contact ${
                  user._id === selectedUser?._id ? " contactactive" : ""
                }`}
                onClick={() => {
                  setSelectUser(user);
                }}
              >
                <img
                  className="contact-img"
                  alt="user-img"
                  src={
                    user.profilePic
                      ? user.profilePic
                      : require("../../resoruce/avatar.png")
                  }
                ></img>
                {onlineUsers.includes(user._id) && (
                  <span className="status-dot"></span>
                )}
                <div className="contact-title">
                  <h5>{user.fullName}</h5>
                  <h6>{`${
                    onlineUsers.includes(user._id) ? "online" : "offline"
                  }`}</h6>
                </div>
              </div>
            );
          })}
        {filteredUsers.length === 0 && (
          <div className="text-div">No Online Users</div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
