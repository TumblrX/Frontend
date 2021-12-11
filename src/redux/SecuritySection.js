/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const SecuritySectionReducer = createSlice({
  name: 'securityInfo',
  initialState: {
    EmailUserAbout: null,
    TwoFactorAuth: null,
  },
  reducers: {
    updateEmailUserAbout: (state, action) => {
      state.EmailUserAbout = action.payload;
    },
    updateTwoFactorAuth: (state, action) => {
      state.TwoFactorAuth = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {
  updateEmailUserAbout,
  updateTwoFactorAuth,
} = SecuritySectionReducer.actions;
export default SecuritySectionReducer.reducer;
