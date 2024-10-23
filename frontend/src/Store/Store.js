import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../Slice/imageSlice";

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;
