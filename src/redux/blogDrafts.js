/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blogDrafts = createSlice({
  name: 'blogDrafts',
  initialState: {
    drafts: [],
    numberOfDrafts: 0,
    pageNum: 1,
    isInfinte: true,
    intialLoading: true,
  },
  reducers: {
    setDrafts: (state, action) => {
      state.drafts = action.payload;
    },
    setNumOfDrafts: (state, action) => {
      state.numberOfDrafts = action.payload;
    },
    incrementPageNum: (state) => {
      state.pageNum += 1;
    },
    decrementPageNum: (state) => {
      state.pageNum -= 1;
    },
    setInitialLoading: (state, action) => {
      state.intialLoading = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  incrementPageNum, decrementPageNum,
  setDrafts, setInitialLoading, setNumOfDrafts,
} = blogDrafts.actions;
export default blogDrafts.reducer;
