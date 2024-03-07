import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatus";

const rootReducer = combineReducers({
  items: itemSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer // Here you must provide the reducer for fetchStatus
});
<itemSlice/>

const myntraStore = configureStore({
  reducer: rootReducer
});

export default myntraStore;
