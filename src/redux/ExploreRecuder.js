import { createSlice } from "@reduxjs/toolkit";

export const ExploreReducer = createSlice({
  name: "Explore",
  initialState: {
    trendingPosts: [],
    flexesNumber: 4,
    trendingPostsIndex: 2,
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
    setFlexesNumbers: (state, action) => {
      state.flexesNumber = action.payload;
    },
    setTrendingPostIndex: (state, action) => {
      state.trendingPostsIndex = action.payload;
    },
  },
});

export const {
  setTrendingPostIndex,
  pushTrendingPost,
  pushTrendingPosts,
  setFlexesNumbers,
} = ExploreReducer.actions;

export default ExploreReducer.reducer;
