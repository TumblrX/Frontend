/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const BlogView = createSlice({
  name: 'BlogView',
  initialState: {
    posts: [],
    isClose: true,
    isShare: false,
    isDots: false,
    blogHandle: '',
    blogTitle: '',
    avatar: '',
    id: '',
    postsMounted: false,
    ismounted: false,
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
    setIsClose: (state, action) => {
      state.isClose = action.payload;
    },
    setIsDots: (state, action) => {
      state.isDots = action.payload;
    },
    setIsShare: (state, action) => {
      state.isShare = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setStopFetch: (state, action) => {
      state.stopFetch = action.payload;
    },
    setPostsMounted: (state, action) => {
      state.postsMounted = action.payload;
    },
    setIsMounted: (state, action) => {
      state.ismounted = action.payload;
    },
    deletePost: (state, action) => {
      const id = action.payload;
      state.posts = state.posts.filter((post) => {
        return post.id !== id;
      });
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setPosts, setIsInfinite, setIsMounted, setPageNum,
  setPostsMounted, setChatMounted, setNextButton, pushPosts, setStopFetch,
  setIsClose, setIsDots, setIsShare
} = BlogView.actions;
export const blogviewActions = BlogView.actions;
export default BlogView.reducer;
