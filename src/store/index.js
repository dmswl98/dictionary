import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book-slice";
import resultSlice from "./result-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    result: resultSlice.reducer,
    book: bookSlice.reducer,
  },
});

export default store;
