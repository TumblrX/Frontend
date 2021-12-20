/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blogPosts = createSlice({
  name: 'blogPosts',
  initialState: {
    pageNum: 1,
    isInfinte: false,
  },
  reducers: {
    incrementPageNum: (state) => {
      state.pageNum += 1;
    },
    decrementPageNum: (state) => {
      state.pageNum -= 1;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setIsInfinite: (state, action) => {
      state.isInfinte = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  incrementPageNum, decrementPageNum, setIsInfinite,
  setPageNum,
} = blogPosts.actions;
export default blogPosts.reducer;
