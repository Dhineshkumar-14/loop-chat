import { createSlice } from "@reduxjs/toolkit";

const messageSlicer = createSlice({
  name: "MessageSlice",
  initialState: {
    users: [],
    messages: [],
    selectedUser: undefined,
  },
  reducers: {
    setUsers(currentState, action) {
      currentState.users = action.payload;
    },
    setMessages(currentState, action) {
      currentState.messages = action.payload.messages;
    },
    setSelectedUser(currentState, action) {
      currentState.selectedUser = action.payload.selectedUser;
    },
  },
});

export default messageSlicer.reducer;

export const { setUsers, setMessages, setSelectedUser } = messageSlicer.actions;
