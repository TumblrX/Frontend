/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const DashboardReducer = createSlice({
  name: 'blogPosts',
  initialState: {
    posts: [],
    pageNum: 1,
    isInfinte: false,
    intialLoading: true,
    NumOfPosts: 0,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
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
    setInitialLoading: (state, action) => {
      state.intialLoading = action.payload;
    },
    setNumOfPosts: (state, action) => {
      state.NumOfPosts = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setPosts, incrementPageNum, decrementPageNum, setIsInfinite,
  setPageNum, setInitialLoading, setNumOfPosts,
} = DashboardReducer.actions;
export default DashboardReducer.reducer;
