import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../items";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemAction = itemSlice.actions; //itemSlice ke liye aCTIONS

export default itemSlice;
