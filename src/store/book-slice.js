import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: [],
  },
  reducers: {
    addWord(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeWord(state, action) {
      const removeItem = action.payload;
      state.items = state.items.filter((item) => item !== removeItem);
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
