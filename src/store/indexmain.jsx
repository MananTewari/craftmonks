import {configureStore} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../items";
import itemSlice from "./itemsSlice";




<itemSlice/>

const myntraStore=configureStore({
    reducer:{
        items:itemSlice.reducer
    }
})

export default myntraStore;