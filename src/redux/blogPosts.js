/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blogPosts = createSlice({
  name: 'blogPosts',
  initialState: {
    posts: [],
    NumOfPosts: 0,
    pageNum: 1,
    isInfinte: true,
    intialLoading: true,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setNumOfPosts: (state, action) => {
      state.NumOfPosts = action.payload;
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
  setInitialLoading, setPosts, setNumOfPosts,
} = blogPosts.actions;
export default blogPosts.reducer;
