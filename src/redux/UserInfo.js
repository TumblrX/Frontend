/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const UserInfoReducer = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo:{},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
    setUserInfo , 
} = UserInfoReducer.actions;
export default UserInfoReducer.reducer;
