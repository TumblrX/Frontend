/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const MainPageReducer = createSlice({
  name: 'register',
  initialState: {
    errorMessage: 9,
    dashboard: false,
  },
  reducers: {
    redirectToDashboard: (state) => {
      state.dashboard = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  redirectToDashboard,
} = MainPageReducer.actions;
export default MainPageReducer.reducer;
