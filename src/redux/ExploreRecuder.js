import {createSlice} from "@reduxjs/toolkit";

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
  },
});

export const {
    setPosts,pushPost
}=ExploreReducer.actions;

export default ExploreReducer.reducer;
