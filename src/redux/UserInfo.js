/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const UserInfoReducer = createSlice({
  name: 'userInfo',
  initialState: {
    id:'',
  },
  reducers: {
    setID: (state, action) => {
        state.id = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
    setID,
} = UserInfoReducer.actions;
export default UserInfoReducer.reducer;
