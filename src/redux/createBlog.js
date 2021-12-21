import { createSlice } from '@reduxjs/toolkit';

export const createBlog = createSlice({
  name: 'createBlog',
  initialState: {
    blogHandle: '',
    blogTitle: '',
    blogIsPrivate: false,
    blogPassword: '',
  },
  reducers: {
    setBlogHandle: (state, action) => {
      state.blogHandle = action.payload;
    },
    setBlogTitle: (state, action) => {
      state.blogTitle = action.payload;
    },
    setBlogPrivacy: (state, action) => {
      state.blogIsPrivate = action.payload;
    },
    setBlogPassword: (state, action) => {
      state.blogPassword = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setBlogHandle, setBlogTitle, setBlogPrivacy, setBlogPassword,
} = createBlog.actions;
export default createBlog.reducer;
