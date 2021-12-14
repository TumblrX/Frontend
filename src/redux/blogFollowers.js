/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blogFollowers = createSlice({
  name: 'blogFollowers',
  initialState: {
    numOfFollowers: 0,
    followers: [],
    searchValue: '',
    searchResult: '',
    isReady: false,
    searchDone: false,
    prevSearchValue: '',
  },
  reducers: {
    setNumOfFollowers: (state, action) => {
      state.numOfFollowers = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setsearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setIsReady: (state, action) => {
      state.isReady = action.payload;
    },
    setSearchDone: (state, action) => {
      state.searchDone = action.payload;
    },
    setPrevSearchValue: (state, action) => {
      state.prevSearchValue = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setNumOfFollowers, setFollowers, setSearchValue, setIsReady, setsearchResult,
  setSearchDone, setPrevSearchValue,
} = blogFollowers.actions;
export default blogFollowers.reducer;
