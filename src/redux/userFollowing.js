/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const Following = createSlice({
  name: 'Following',
  initialState: {
    numOfFollowing: 0,
    Following: [],
    searchValue: '',
    searchResult: '',
    isReady: false,
    searchDone: false,
    prevSearchValue: '',
    newFollowing: true,
    disable: true,
    Found: false,
  },
  reducers: {
    setNumOfFollowing: (state, action) => {
      state.numOfFollowing = action.payload;
    },
    setFollowing: (state, action) => {
      var array = action.payload;
      array.forEach(follow => follow.followingStatus = 'unFollow');
      state.Following=array;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setsearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setIsReady: (state, action) => {
      state.isReady = action.payload;
    },
    setSearchDone: (state, action) => {
      state.searchDone = action.payload;
    },
    setPrevSearchValue: (state, action) => {
      state.prevSearchValue = action.payload;
    },
    setFollowingStatus: (state, action) => {
        const id = action.payload.id;
        for (let index = 0; index < state.Following.length; index++) {
            if(state.Following[index]._id === id){
                state.Following[index].followingStatus=action.payload.status;
            }
        }
    },
    setNewFollowing: (state) => {
        state.newFollowing = !state.newFollowing;
    },
    setValidSearch: (state, action) => {
        state.disable = action.payload;
    },
    setFound: (state, action) => {
        state.Found = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
    setNumOfFollowing, setFollowing, setSearchValue, setIsReady, setsearchResult,
  setSearchDone, setPrevSearchValue, setFollowingStatus, setNewFollowing, setValidSearch,
  setFound, 
} = Following.actions;
export default Following.reducer;
