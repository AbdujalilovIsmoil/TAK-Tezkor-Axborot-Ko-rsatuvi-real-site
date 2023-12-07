import { configureStore } from "@reduxjs/toolkit";
import navbar from "./navbar";

export const store = configureStore({
  reducer: { navbar },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
