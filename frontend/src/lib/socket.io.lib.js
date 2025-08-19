import io from "socket.io-client";
import { BASE_URL } from "../config/url.config";
import { store } from "../store/store";
import { setOnlineUsers } from "../store/slicers/AuthSlicer";

export const socket = io(BASE_URL, {
  autoConnect: false,
});

export const connectSocket = (dispatch) => {
  const authUser = store.getState().authUser;

  if (!authUser.user || socket.connected) {
    return;
  }
  socket.io.opts.query = {
    userId: authUser.user._id,
  };
  socket.connect();
  socket.on("getOnlineUsers", (userIds) => {
    dispatch(setOnlineUsers(userIds));
  });
};

export const disConnect = (dispatch) => {
  if (socket?.connected) socket.disconnect();
  socket.on("getOnlineUsers", (userIds) => {
    dispatch(setOnlineUsers(userIds));
  });
};
