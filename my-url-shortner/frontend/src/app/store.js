import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import urlReduce from "../features/shortenUrls/shortUrlSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    urls: urlReduce,
  },
});
