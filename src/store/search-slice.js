import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    word: "",
  },
  reducers: {
    searchWord(state, action) {
      state.word = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
