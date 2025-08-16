import { createSlice } from "@reduxjs/toolkit";
const authSlicer = createSlice({
  name: "AuthSlicer",
  initialState: {
    user: null,
    isCheckingAuth: true,
    isLoggingIng: false,
    isSigningUp: false,
    isUpdatingProfile: false,
  },
  reducers: {
    setUser(currentState, action) {
      currentState.user = action.payload;
    },
  },
});

export const { setUser } = authSlicer.actions;

export default authSlicer.reducer;
