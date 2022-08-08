import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./result-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    result: resultSlice.reducer,
  },
});

export default store;
