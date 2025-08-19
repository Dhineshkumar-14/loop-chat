import { createSlice } from "@reduxjs/toolkit";
const authSlicer = createSlice({
  name: "AuthSlicer",
  initialState: {
    user: null,
    isCheckingAuth: true,
    isLoggingIng: false,
    isSigningUp: false,
    isUpdatingProfile: false,
    onlineUsersKeys: [],
  },
  reducers: {
    setUser(currentState, action) {
      currentState.user = action.payload;
    },
    setOnlineUsers(currentState, action) {
      currentState.onlineUsersKeys = action.payload;
    },
  },
});

export const { setUser, setOnlineUsers } = authSlicer.actions;

export default authSlicer.reducer;
