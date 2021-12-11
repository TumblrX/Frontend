/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const ForgetPasswordReducer = createSlice({
  name: 'forgetPassword',
  initialState: {
    errorMessage: 3,
    dashboard: false,
    errors: {
      error: 0,
      fillEmail: 1,
      invalidEmail: 2,
    },
    errorMessages: [
      'There was an error submitting your request.',
      'Please enter your email address.',
      'Sorry, that email address is not registered with us. Please try again or register a new account.',
    ],
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    redirectToDashboard: (state) => {
      state.dashboard = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setErrorMessage, redirectToDashboard,
} = ForgetPasswordReducer.actions;
export default ForgetPasswordReducer.reducer;
