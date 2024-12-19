import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export default store;
