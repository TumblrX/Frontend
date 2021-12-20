/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blog = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    NumOfPosts: 0,
    blogHandle: '',
    blogTitle: '',
    avatar: '',
    id: '',
    intialLoading: true,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setNumOfPosts: (state, action) => {
      state.NumOfPosts = action.payload;
    },
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
  },
});
// Action creators are generated for each case reducer function
export const {
  setPosts, setNumOfPosts, setBlogHandle, setBlogTitle,
  setAvatar, setId, setInitialLoading,
} = blog.actions;
export default blog.reducer;
