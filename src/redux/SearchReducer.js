import { createSlice } from "@reduxjs/toolkit";

export const SearchReducer = createSlice({
  name: "Search",
  initialState: {
    trendingPosts: [],
    forYouPosts: [],
    audioPosts: [],
    textPosts: [],
    imagesPosts: [],
    vidoesPosts: [],
    askPosts: [],
    checkBlogs: [],
    flexesNumber: 4,
    trendingPostsIndex: 2,
    forYouPostsIndex: 0,
    audioPostsIndex: 0,
    textPostsIndex: 2,
    imagesPostsIndex: 2,
    vidoesPostsIndex: 2,
    askPostsIndex: 2,
    searchWord: "",
    searchPostsIndex: 0,
  },
  reducers: {
    setSeachWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setSearchPostsIndex: (state, action) => {
      state.searchPostsIndex = action.payload;
    },
    pushTrendingPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.trendingPosts.push(action.payload[i]);
      }
    },
    pushForYouPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.forYouPosts.push(action.payload[i]);
      }
    },
    pushAudioPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.audioPosts.push(action.payload[i]);
      }
    },
    pushTextPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.textPosts.push(action.payload[i]);
      }
    },
    pushImagePosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.imagesPosts.push(action.payload[i]);
      }
    },
    pushCheckBlogs: (state, action) => {
      state.checkBlogs = action.payload;
      console.log(state.checkBlogs);
    },
    pushSpecificBlog: (state, action) => {
      state.checkBlogs.push(action.payload);
    },
    removeSpecificBlog: (state, action) => {
      state.checkBlogs.splice(action.payload, 1);
    },
    pushVideosPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.vidoesPosts.push(action.payload[i]);
      }
    },
    pushAskPosts: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.askPosts.push(action.payload[i]);
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
    setAudioPostIndex: (state, action) => {
      state.audioPostsIndex = action.payload;
    },
    setTextPostIndex: (state, action) => {
      state.textPostsIndex = action.payload;
    },
    setImagesPostIndex: (state, action) => {
      state.imagesPostsIndex = action.payload;
    },
    setVideosPostIndex: (state, action) => {
      state.vidoesPostsIndex = action.payload;
    },
    setAskPostIndex: (state, action) => {
      state.askPostsIndex = action.payload;
    },
  },
});

export const {
  setTrendingPostIndex,
  pushTrendingPosts,
  setFlexesNumbers,
  setForYouPostIndex,
  pushForYouPosts,
  pushAudioPosts,
  setAudioPostIndex,
  setTextPostIndex,
  pushTextPosts,
  setImagesPostIndex,
  pushImagePosts,
  setVideosPostIndex,
  pushVideosPosts,
  setAskPostIndex,
  pushAskPosts,
  pushCheckBlogs,
  pushSpecificBlog,
  removeSpecificBlog,
  setSearchPostsIndex,
  setSeachWord,
} = SearchReducer.actions;

export default SearchReducer.reducer;
