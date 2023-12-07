import config from "config";
import { CounterState } from "ts/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterState = {
  isOpen: false,
  language: config.DEFAULT_LANGUAGE,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    isOpenNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { isOpenNavbar, changeLanguage } = counterSlice.actions;

export default counterSlice.reducer;
