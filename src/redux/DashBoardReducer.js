/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const DashboardReducer = createSlice({
  name: 'DashBoard',
  initialState: {
    posts: [],
    exploreBlogs: [1,2,3],
    radar:[],
    postsMounted: false,
    exploreBlogsMounted:false,
    radarMounted:false,
    pageNum: 1,
    pageNumPosts: 5,
    isInfinte: false,
    ismounted: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsMounted: (state, action) => {
      state.postsMounted = action.payload;
    },
    setExploreBlogsMounted: (state, action) => {
      state.exploreBlogsMounted = action.payload;
    },
    setRadarMounted: (state, action) => {
      state.radarMounted = action.payload;
    },
    removeBlog: (state, action) =>{
      const id =action.payload;
      state.exploreBlogs.splice(id,1);
    },
    incrementPageNum: (state) => {
      state.pageNum += 1;
    },
    decrementPageNum: (state) => {
      state.pageNum -= 1;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setIsInfinite: (state, action) => {
      state.isInfinte = action.payload;
    },
    setExploreBlogs: (state, action) => {
      state.exploreBlogs = action.payload;
    },
    setIsMounted: (state, action) => {
      state.ismounted = action.payload;
    },
    setpageNumPosts: (state, action) => {
      state.pageNumPosts = action.payload;
    },
    deletePost: (state, action) => {
      const id = action.payload;
      state.posts = state.posts.filter((post) => {
        return post.id !== id;
      });
    },
    setRadar: (state, action) =>{
      state.radar =action.payload;
    },
  }
});
// Action creators are generated for each case reducer function
export const {
  setPosts, incrementPageNum, decrementPageNum, setIsInfinite,
  setExploreBlogs, setIsMounted, setPageNum,setRadar,
  setPostsMounted, setExploreBlogsMounted, setRadarMounted, 
  removeBlog
} = DashboardReducer.actions;
export const dashboardActions = DashboardReducer.actions;
export default DashboardReducer.reducer;
