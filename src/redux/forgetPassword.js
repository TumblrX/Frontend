/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const ForgetPasswordReducer = createSlice({
  name: 'forgetPassword',
  initialState: {
    hideForm:false,   
    hideConfirm: true,
    hideError: true,
    hideEmptyEmail: true,   
  },
  reducers: {
    setHideForm: (state, action) => {
      state.hideForm = action.payload;
    },
    setHideConfirm: (state, action) => {
      state.hideConfirm = action.payload;
    },
    setHideError: (state, action) => {
      state.hideError = action.payload;
    },
    setHideEmptyEmail: (state, action) => {
      state.hideEmptyEmail = action.payload;
    },    
  },
});
// Action creators are generated for each case reducer function
export const {
  setHideForm, setHideConfirm, setHideError, setHideEmptyEmail,
} = ForgetPasswordReducer.actions;
export default ForgetPasswordReducer.reducer;
