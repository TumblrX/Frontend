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
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateConfirmedPassword: (state, action) => {
      state.confirmedPassword = action.payload;
    },
    updateLetPeopleFindBlogByEmail: (state, action) => {
      state.letPeopleFindBlogByEmail = action.payload;
    },
    updatePrevEmail: (state, action) => {
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
