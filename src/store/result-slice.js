import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    resultData: {
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
      state.resultData.id = action.payload.id;
      state.resultData.word = action.payload.word;
      state.resultData.meanings = action.payload.meanings;
      state.resultData.phonetics = action.payload.phonetics;
    },
    changeErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice;
