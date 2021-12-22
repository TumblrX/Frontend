import { createSlice } from "@reduxjs/toolkit";

export const ExploreReducer = createSlice({
  name: "Explore",
  initialState: {
    trendingPosts: [],
    flexesNumber:4,
    postIndex:2,
  },
  reducers: {
    setTrendingPosts: (state, action) => {
      state.trendingPosts = action.payload;
    },
    pushTrendingPost: (state, action) => {
      state.trendingPosts.push(action.payload);
    },
    pushTrendingPosts: (state, action) => {
      for(let i =0 ; i<action.payload.length;i++){
          state.trendingPosts.push(action.payload[i]); 
      }
    },
    setFlexesNumbers:(state,action)=>{
        state.flexesNumber=action.payload
    },
    setPostIndex:(state,action)=>{
        state.postIndex=action.payload
    }
  },
});

export const { setTrendingPosts, pushTrendingPost, pushTrendingPosts ,setFlexesNumbers } = ExploreReducer.actions;

export default ExploreReducer.reducer;
