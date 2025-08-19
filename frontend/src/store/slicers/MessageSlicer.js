import { createSlice } from "@reduxjs/toolkit";

const messageSlicer = createSlice({
  name: "MessageSlice",
  initialState: {
    users: [],
    messages: [],
    selectedUser: undefined,
    isShowOnlineUserOnly: false,
  },
  reducers: {
    setUsers(currentState, action) {
      currentState.users = action.payload;
    },
    setMessages(currentState, action) {
      currentState.messages = action.payload;
    },
    setSelectedUser(currentState, action) {
      currentState.selectedUser = action.payload;
    },
    addMessages(currentState, action) {
      currentState.messages.push(action.payload);
    },
    setOnlineUSerVisiblity(currentState, action) {
      currentState.isShowOnlineUserOnly = action.payload;
    },
  },
});

export default messageSlicer.reducer;

export const { setUsers, setMessages, setSelectedUser, addMessages,setOnlineUSerVisiblity } =
  messageSlicer.actions;
