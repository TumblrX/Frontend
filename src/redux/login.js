/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const LoginReducer = createSlice({
  name: 'login',
  initialState: {
    hideFillData: true,
    hideFillEmail: true,
    hideFillPassword: true,
    hideWrongData: true,
    dashboard: false,
  },
  reducers: {
    showFillData: (state) => {
      state.hideFillData = false;
      state.hideFillEmail = true;
      state.hideFillPassword = true;
      state.hideWrongData = true;
    },
    showFillEmail: (state) => {
      state.hideFillData = true;
      state.hideFillEmail = false;
      state.hideFillPassword = true;
      state.hideWrongData = true;
    },
    showFillPassword: (state) => {
      state.hideFillData = true;
      state.hideFillEmail = true;
      state.hideFillPassword = false;
      state.hideWrongData = true;
    },
    showWrongData: (state) => {
      state.hideFillData = true;
      state.hideFillEmail = true;
      state.hideFillPassword = true;
      state.hideWrongData = false;
    },
    redirectToDashboard: (state) => {
      state.dashboard = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  showFillData, showFillEmail, showFillPassword, showWrongData, redirectToDashboard,
} = LoginReducer.actions;
export default LoginReducer.reducer;
