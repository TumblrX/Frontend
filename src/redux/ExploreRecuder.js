import { createSlice } from "@reduxjs/toolkit";

export const ExploreReducer = createSlice({
  name: "Explore",
  initialState: {
    posts: [],
    flexesNumbers:4,
    postIndex:2,
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
    setFlexesNumbers:(state,action)=>{
        state.flexesNumbers=action.payload
    },
    setPostIndex:(state,action)=>{
        state.postIndex=action.payload
    }
  },
});

export const { setPosts, pushPost, pushPosts ,setFlexesNumbers } = ExploreReducer.actions;

export default ExploreReducer.reducer;
