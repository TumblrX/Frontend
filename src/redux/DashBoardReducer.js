/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const DashboardReducer = createSlice({
  name: 'DashBoard',
  initialState: {
    posts: [],
    pageNum: 1,
    isInfinte: false,
    ismounted: false,
    exploreBlogs: [1, 2, 3, 5],
    pageNumPosts: 5,
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
    setExploreBlogs: (state, action) => {
      state.exploreBlogs = action.payload;
    },
    setIsMounted: (state, action) => {
      state.ismounted = action.payload;
    },
    setpageNumPosts: (state, action) => {
      state.pageNumPosts = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setPosts, incrementPageNum, decrementPageNum, setIsInfinite,
  setExploreBlogs, setIsMounted, setPageNum,
} = DashboardReducer.actions;
export default DashboardReducer.reducer;
