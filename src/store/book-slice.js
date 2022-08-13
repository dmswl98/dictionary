import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    folders: [],
  },
  reducers: {
    createFolder(state, action) {
      state.folders.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        color: action.payload.color,
        items: [],
        count: 0,
      });
    },
    addWordToFolder(state, action) {
      const folderIndex = state.folders.findIndex(
        (folder) => folder.name === action.payload.name
      );
      state.folders[folderIndex].items.push(action.payload.word);
      state.folders[folderIndex].count = state.folders[folderIndex].count + 1;
    },
    removeWordToFolder(state, action) {
      const folderIndex = action.payload.index;
      state.folders[folderIndex].count = state.folders[folderIndex].count - 1;
      state.folders[folderIndex].items = state.folders[
        folderIndex
      ].items.filter((item) => item !== action.payload.word);
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
