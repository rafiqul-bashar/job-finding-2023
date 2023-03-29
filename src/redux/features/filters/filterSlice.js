import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sortBy: "default",
  specific: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchedFunc: (state, action) => {
      state.search = action.payload;
    },
    sortByFilter: (state, action) => {
      state.sortBy = action.payload;
    },
    selectJob: (state, action) => {
      state.specific = action.payload;
    },
  },
});

export const { searchedFunc, sortByFilter, selectJob } = filterSlice.actions;

export default filterSlice.reducer;
