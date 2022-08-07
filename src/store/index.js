import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: searchSlice.reducer,
});

export default store;
