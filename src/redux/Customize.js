/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const CustomizeReducer = createSlice({
  name: 'customize',
  initialState: {
    errorMessage: 9,
    dashboard: false,
    errors: {
      fillData: 0,
      fillEmail: 1,
      fillPassword: 2,
      fillBlogName: 3,
      invalidEmail: 4,
      usedEmail: 5,
      shortPassword: 6,
      weakPassword: 7,
      usedBlogName: 8,
    },
    errorMessages: [
      'You do have to fill this stuff out, you know.',
      'You forgot to enter your email!',
      'You forgot to enter your password!',
      'You forgot to enter your blog name!',
      'That\'s not a valid email address. Please try again.',
      'This email address is already in use.',
      'The password must be at least 8 characters.',
      'Please choose a stronger password.',
      'That\'s a good blog name, but it\'s taken.',
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
} = CustomizeReducer.actions;
export default CustomizeReducer.reducer;
