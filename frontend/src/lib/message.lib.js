import { setUsers } from "../store/slicers/MessageSlicer";
import { axiosInstance } from "./axios";

export const getUsers = async (dispatch) => {
  try {
    const res = await axiosInstance.get("/message/users");
    dispatch(setUsers(res.data));
  } catch (error) {
    console.log("Error in getUsers function" + error);
  }
};
