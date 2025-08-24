import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicers/AuthSlicer";
import messageSlicer from "./slicers/MessageSlicer.js";
import loaderSlicer from "./slicers/LoaderSlicer.js";
export const store = configureStore({
  reducer: {
    authUser: authSlicer,
    messageSlicer: messageSlicer,
    loaderSlicer: loaderSlicer,
  },
});
