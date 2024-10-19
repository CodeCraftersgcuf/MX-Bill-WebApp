import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice"; 

export const store = configureStore({
  reducer: {
    dropDown: dropDownSlice,
  },
});
