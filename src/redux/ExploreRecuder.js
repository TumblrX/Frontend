import { createSlice } from "@reduxjs/toolkit";

export const ExploreReducer = createSlice({
  name: "Explore",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    pushPost: (state, action) => {
      state.posts.push(action.payload);
    },
    pushPosts: (state, action) => {
      for(let i =0 ; i<action.payload.length;i++){
          state.posts.push(action.payload[i]); 
      }
    },
  },
});

export const { setPosts, pushPost, pushPosts } = ExploreReducer.actions;

export default ExploreReducer.reducer;
