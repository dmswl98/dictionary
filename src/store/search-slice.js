import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search-result",
  initialState: {
    result: {
      id: "",
      word: "",
      meanings: [],
      phonetics: [],
    },
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    loadData(state, action) {
      state.isLoading = action.payload;
    },
    replaceWord(state, action) {
      state.result.id = action.payload.id;
      state.result.word = action.payload.word;
      state.result.meanings = action.payload.meanings;
      state.result.phonetics = action.payload.phonetics;
    },
    occurError(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
