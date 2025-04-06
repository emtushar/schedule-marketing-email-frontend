import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import appSlice from "./slices/appSlice.js";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
  },
});
