import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/AuthSlicer";
export const store = configureStore({
  reducer: {
    authUser: authSlicer,
  },
});
