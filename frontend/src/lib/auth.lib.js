import toast from "react-hot-toast";
import { setUser } from "../store/slicers/AuthSlicer";
import { axiosInstance } from "./axios";
import { connectSocket, disConnect } from "./socket.io.lib";
import { setLoaderVisible } from "../store/slicers/LoaderSlicer";

export const checkAuth = async (dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const checkAuth = await axiosInstance.get("/auth/check");
    dispatch(setUser(checkAuth.data));
    connectSocket(dispatch);
  } catch (error) {
    console.log("Error in checkauth function" + error);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const signup = async (formData, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.post("/auth/signup", formData);
    dispatch(setUser(res.data));
    toast.success("Account Created Successfully");
    connectSocket(dispatch);
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const login = async (formData, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.post("/auth/login", formData);
    dispatch(setUser(res.data));
    toast.success("Logged In Successfully");
    connectSocket(dispatch);
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    await axiosInstance.post("/auth/logout");
    dispatch(setUser(null));
    disConnect(dispatch);
    toast.success("Logged out successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};

export const updateProfile = async (formData, dispatch) => {
  try {
    dispatch(setLoaderVisible(true));
    const res = await axiosInstance.put("/auth/update-profile", formData);
    const resData = await res.data;
    await dispatch(setUser(resData));
    toast.success("Profile Pic updated successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  } finally {
    dispatch(setLoaderVisible(false));
  }
};
