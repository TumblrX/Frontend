/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const UserInfoReducer = createSlice({
  name: 'userInfo',
  initialState: {
    id:'new',
    infinteScrolling:true,
  },
  reducers: {
    setID: (state, action) => {
        state.id = action.payload;
    },
    setInfinteScrolling: (state, action) => {
      state.infinteScrolling = action.payload;
  },
  },
});
// Action creators are generated for each case reducer function
export const {
    setID,
} = UserInfoReducer.actions;
export default UserInfoReducer.reducer;
