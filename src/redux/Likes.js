/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const LikedPosts = createSlice({
  name: 'LikedPosts',
  initialState: {
    Likes: [],
    numberOfLikes: 0,
    pageNum: 1,
    isInfinte: true,
    intialLoading: true,
  },
  reducers: {
    setLikes: (state, action) => {
      state.Likes = action.payload;
    },
    setNumOfLikes: (state, action) => {
      state.numberOfLikes = action.payload;
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
  setLikes, setInitialLoading, setNumOfLikes,
} = LikedPosts.actions;
export default LikedPosts.reducer;
