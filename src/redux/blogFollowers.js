/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const blogFollowers = createSlice({
  name: 'blogFollowers',
  initialState: {
    numOfFollowers: 0,
    followers: [],
  },
  reducers: {
    setNumOfFollowers: (state, action) => {
      state.numOfFollowers = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setNumOfFollowers, setFollowers } = blogFollowers.actions;
export default blogFollowers.reducer;
