import { setLoaderVisible } from "../store/slicers/LoaderSlicer";
import {
  setUsers,
  setSelectedUser,
  setMessages,
  addMessages,
} from "../store/slicers/MessageSlicer";
import { store } from "../store/store";
import { axiosInstance } from "./axios";
import { socket } from "./socket.io.lib";

export const getUsers = async (dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.get("/message/users");
    dispatch(setUsers(res.data));
  } catch (error) {
    console.log("Error in getUsers function" + error);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const updateSelectedUser = async (user, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    dispatch(setSelectedUser(user));
  } catch (error) {
    console.log("Error in getUsers function" + error);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const sendMessage = async (selectedUser, message, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.post(
      "/message/send/" + selectedUser._id,
      message
    );
    dispatch(addMessages(res.data));
  } catch (error) {
    console.log("Error in getUsers function" + error);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const getMessages = async (selectedUser, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.get("/message/" + selectedUser._id);
    dispatch(setMessages(res.data));
  } catch (error) {
    console.log("Error in getUsers function" + error);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const subscribeToMessages = (dispatch) => {
  const selectedUser = store.getState().messageSlicer.selectedUser;
  if (!selectedUser) return;

  socket.on("newMessage", (newMessage) => {
    if (newMessage.senderId !== selectedUser.id) return;
    dispatch(addMessages(newMessage));
  });
};

export const unSubscribeToMessages = (dispatch) => {
  socket.off("newMessage");
};
