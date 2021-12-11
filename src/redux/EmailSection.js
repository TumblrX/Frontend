/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const EmailSectionReducer = createSlice({
  name: 'emailInfo',
  initialState: {
    email: '',
    password: '',
    previousEmail: '',
    confirmedPassword: '',
    letPeopleFindBlogByEmail: null,
  },
  reducers: {
    updatePassword: (state) => {
      console.log(state);
    },
    updateEmail: (state, action) => {
      console.log('master', state, action);
      state.email = action.payload;
    },
    updateConfirmedPassword: (state, action) => {
      console.log(state);
      state.confirmedPassword = action.payload;
    },
    updateLetPeopleFindBlogByEmail: (state, action) => {
      console.log(state);
      state.letPeopleFindBlogByEmail = action.payload;
    },
    updatePrevEmail: (state, action) => {
      console.log(state);
      state.previousEmail = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {
  updateEmail,
  updateConfirmedPassword,
  updateLetPeopleFindBlogByEmail,
  updatePrevEmail,
  updatePassword,
} = EmailSectionReducer.actions;
export default EmailSectionReducer.reducer;
