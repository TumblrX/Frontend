/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const CustomizeReducer = createSlice({
  name: 'customize',
  initialState: {
    settings: {
      title: 'Taherr',
      description: 'Hello',
      headerImage: 'https://assets.tumblr.com/images/default_header/optica_pattern_10_focused_v3.png?_v=eafbfb1726b334d86841955ae7b9221c',
      avatar: 'https://assets.tumblr.com/images/default_avatar/sphere_open_128.png',
      avatarShapeCircle: true,
      bgColor: '#acacac',
      titleColor: '#000000',
      accentColor: '#ffffff',
      showHeaderImage: true,
      stretchHeaderImage: true,
      showAvatar: true,
      showTitle: true,
      showDescription: true,
      useNewPostTypes:true,
      slidingHeader:true,
      showNavigation:true,
      endlessScrolling:true,
      syntaxHighlighting:true,
      relatedPosts:true,
    },  
    dataToSend:{

    }  
  },
  reducers: {
    setTitle: (state, action) => {
      state.settings.title = action.payload;
    },
    setDescription: (state, action) => {
      state.settings.description = action.payload;
    },
    setHeaderImage: (state, action) => {
      state.settings.headerImage = action.payload;
    },
    setAvatar: (state, action) => {
      state.settings.avatar = action.payload;
    },
    setAvatarShapeCircle: (state, action) => {
      state.settings.avatarShapeCircle = action.payload;
    },
    setBgColor: (state, action) => {
      state.settings.bgColor = action.payload;
    },
    setTitleColor: (state, action) => {
      state.settings.titleColor = action.payload;
    },
    setAccentColor: (state, action) => {
      state.settings.accentColor = action.payload;
    },
    setShowHeaderImage: (state, action) => {
      state.settings.showHeaderImage = action.payload;
    },
    setStretchHeaderImage: (state, action) => {
      state.settings.stretchHeaderImage = action.payload;
    },
    setShowAvatar: (state, action) => {
      state.settings.showAvatar = action.payload;
    },
    setShowTitle: (state, action) => {
      state.settings.showTitle = action.payload;
    },
    setShowDescription: (state, action) => {
      state.settings.showDescription = action.payload;
    },
    setUseNewPostTypes: (state, action) => {
      state.settings.useNewPostTypes = action.payload;
    },
    setSlidingHeader: (state, action) => {
      state.settings.slidingHeader = action.payload;
    },
    setShowNavigation: (state, action) => {
      state.settings.showNavigation = action.payload;
    },
    setEndlessScrolling: (state, action) => {
      state.settings.endlessScrolling = action.payload;
    },
    setSyntaxHighlighting: (state, action) => {
      state.settings.syntaxHighlighting = action.payload;
    },
    setRelatedPosts: (state, action) => {
      state.settings.relatedPosts = action.payload;
    }, 
    setDataToSend: (state, action ) => {
      state.dataToSend = { ...state.dataToSend, ...action.payload };
    },       
  },
});
// Action creators are generated for each case reducer function
export const {
  setTitle,
  setDescription,
  setHeaderImage,
  setAvatar,
  setAvatarShapeCircle,
  setBgColor,
  setTitleColor,
  setAccentColor,
  setShowHeaderImage,
  setStretchHeaderImage,
  setShowAvatar,
  setShowTitle,
  setShowDescription,
  setUseNewPostTypes,
  setSlidingHeader,
  setShowNavigation,
  setEndlessScrolling,
  setSyntaxHighlighting,
  setRelatedPosts,
  setDataToSend,
} = CustomizeReducer.actions;
export default CustomizeReducer.reducer;
