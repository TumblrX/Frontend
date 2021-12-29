/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const DashboardReducer = createSlice({
  name: 'DashBoard',
  initialState: {
    posts: [],
    exploreBlogs: [],
    radar:[],
    postsMounted: false,
    exploreBlogsMounted:false,
    radarMounted:false,
    pageNum: 1,
    pageNumPosts: 10,
    isInfinte: false,
    ismounted: false,
    ChatMounted: false,
    nextButton: true,
    isChat: false,
    stopFetch:false,
    freind: {},
    isLoading: false
  },
  reducers: {
    setIsLoading : (state, action) => {
      state.isLoading = action.payload;
    },
    setIsChat: (state, action) => {
      state.isChat = action.payload;
      // console.log('chat ->', state.isChat);
    },
    setFreind: (state, action) => {
      state.freind = action.payload;
      console.log('freind ->', state.freind);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    pushPosts : (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.posts.push(action.payload[i]);
      }
    },
    setStopFetch: (state, action) => {
      state.stopFetch = action.payload;
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
      console.log(state.pageNum);
    },
    decrementPageNum: (state) => {
      state.pageNum -= 1;
      console.log(state.pageNum);
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
    setNextButton: (state, action) => {
      state.nextButton = action.payload;
    },
    setpageNumPosts: (state, action) => {
      state.pageNumPosts = action.payload;
    },
    setRadar: (state, action) =>{
      state.radar =action.payload;
    },
    setChatMounted: (state, action) =>{
      state.chatMounted = action.payload;
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
  setPosts, incrementPageNum, decrementPageNum, setIsInfinite,
  setExploreBlogs, setIsMounted, setPageNum,setRadar,
  setPostsMounted, setExploreBlogsMounted, setRadarMounted, 
  removeBlog, setChatMounted, setNextButton, setIsChat,
  setFreind,pushPosts,setStopFetch,setIsLoading,
} = DashboardReducer.actions;
export const dashboardActions = DashboardReducer.actions;
export default DashboardReducer.reducer;
