import { createSlice } from "@reduxjs/toolkit";

export const ExploreReducer = createSlice({
  name: "Explore",
  initialState: {
    trendingPosts: [],
    forYouPosts: [],
    flexesNumber: 4,
    trendingPostsIndex: 2,
    forYouPostsIndex: 2,
  },
  reducers: {
    setTrendingPosts: (state, action) => {
      state.trendingPosts = action.payload;
    },
    pushTrendingPost: (state, action) => {
      state.trendingPosts.push(action.payload);
    },
    pushTrendingPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.trendingPosts.push(action.payload[i]);
      }
    },
    pushForYouPost: (state, action) => {
      state.forYouPosts.push(action.payload);
    },
    pushForYouPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.forYouPosts.push(action.payload[i]);
      }
    },
    setFlexesNumbers: (state, action) => {
      state.flexesNumber = action.payload;
    },
    setTrendingPostIndex: (state, action) => {
      state.trendingPostsIndex = action.payload;
    },
    setForYouPostIndex: (state, action) => {
      state.forYouPostsIndex = action.payload;
    },
  },
});

export const {
  setTrendingPostIndex,
  pushTrendingPost,
  pushTrendingPosts,
  setFlexesNumbers,
  setForYouPostIndex,
  pushForYouPost,
  pushForYouPosts,
} = ExploreReducer.actions;

export default ExploreReducer.reducer;
