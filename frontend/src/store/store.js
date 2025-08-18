import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/AuthSlicer";
import messageSlicer from "./slicers/MessageSlicer.js";
export const store = configureStore({
  reducer: {
    authUser: authSlicer,
    messageSlicer: messageSlicer,
  },
});
