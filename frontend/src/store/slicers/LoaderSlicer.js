import { createSlice } from "@reduxjs/toolkit";

const loaderSlicer = createSlice({
  name: "LoaderSlicer",
  initialState: {
    isLoaderVisible: true,
  },
  reducers: {
    setLoaderVisible(currentState, action) {
      currentState.isLoaderVisible = action.payload;
    },
  },
});

export default loaderSlicer.reducer;
export const { setLoaderVisible } = loaderSlicer.actions;
