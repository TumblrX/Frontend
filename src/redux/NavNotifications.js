/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const NavNotificationsReducer = createSlice({
  name: 'navNotifications',
  initialState: {
    notifications :[],
  },
  reducers: {
    setNotifications: (state, action) => {
        state.notifications = [...action.payload];
    },
    addNotifications: (state, action) => {
      state.notifications = [action.payload , ...state.notifications];
  },
  },
});
// Action creators are generated for each case reducer function
export const {
    setNotifications, addNotifications
} = NavNotificationsReducer.actions;
export default NavNotificationsReducer.reducer;
