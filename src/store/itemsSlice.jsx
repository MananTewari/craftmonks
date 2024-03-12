import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: "items",
  initialState:[],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; 
    },
  },
});

export const itemAction = itemSlice.actions; //itemSlice ke liye aCTIONS

export default itemSlice;
