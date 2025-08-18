import toast from "react-hot-toast";
import { setUser } from "../store/slicers/AuthSlicer";
import { axiosInstance } from "./axios";

export const checkAuth = async (dispatch) => {
  try {
    const checkAuth = await axiosInstance.get("/auth/check");
    dispatch(setUser(checkAuth.data));
  } catch (error) {
    console.log("Error in checkauth function" + error);
  }
};

export const signup = async (formData, dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/signup", formData);
    dispatch(setUser(res.data));
    toast.success("Account Created Successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const login = async (formData, dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/login", formData);
    dispatch(setUser(res.data));
    toast.success("Logged In Successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const logout = async (dispatch) => {
  try {
    await axiosInstance.post("/auth/logout");
    dispatch(setUser(null));
    toast.success("Logged out successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateProfile = async (formData, dispatch) => {
  try {
    const res = await axiosInstance.put("/auth/update-profile", formData);
    const resData = await res.data;
    await dispatch(setUser(resData));
    toast.success("Profile Pic updated successfully");
  } catch (error) {
    console.log(error);

    toast.error(error.response.data.message);
  }
};
