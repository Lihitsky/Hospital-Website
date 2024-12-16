import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
  },
});

export default store;
