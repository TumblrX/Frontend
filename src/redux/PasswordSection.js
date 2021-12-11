/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const PasswordSectionReducer = createSlice({
  name: 'passwordInfo',
  initialState: {
    password: '',
    confirmedPassword: '',
    newPassword: '',
    newConfirmedPassword: '',
  },
  reducers: {
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateConfirmedPassword: (state, action) => {
      state.confirmedPassword = action.payload;
    },
    updatenewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    updatenewConfirmedPassword: (state, action) => {
      state.newConfirmedPassword = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {
  updatePassword,
  updateConfirmedPassword,
  updatenewPassword,
  updatenewConfirmedPassword,
} = PasswordSectionReducer.actions;
export default PasswordSectionReducer.reducer;
