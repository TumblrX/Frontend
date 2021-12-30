/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blog = createSlice({
  name: 'blog',
  initialState: {
    blogHandle: '',
    blogTitle: '',
    avatar: '',
    id: '',
    intialLoading: true,
    NumOfDrafts: 0,
    NumOfFollowers: 0,
    NumOfPosts: 0,
    Radar: [],
    RadarIsMounted: false,
  },
  reducers: {
    setBlogHandle: (state, action) => {
      state.blogHandle = action.payload;
    },
    setBlogTitle: (state, action) => {
      state.blogTitle = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setInitialLoading: (state, action) => {
      state.intialLoading = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setNumOfDrafts: (state, action) => {
      state.NumOfDrafts = action.payload;
    },
    setNumOfFollowers: (state, action) => {
      state.NumOfFollowers = action.payload;
    },
    setNumOfPosts: (state, action) => {
      state.NumOfPosts = action.payload;
    },
    setRadar: (state, action) => {
      state.Radar = action.payload;
    },
    setRadarIsMounted: (state, action) => {
      state.RadarIsMounted = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setBlogHandle, setBlogTitle, setNumOfDrafts, setNumOfPosts,
  setAvatar, setId, setInitialLoading, setNumOfFollowers, setRadar, setRadarIsMounted
} = blog.actions;
export default blog.reducer;
