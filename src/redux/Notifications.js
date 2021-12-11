/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const NotificationsReducer = createSlice({
  name: 'notificationsInfo',
  initialState: {
    EmailUserAboutNewFollowersBoxState: null,
    EmailUserAboutNewRepliesBoxState: null,
    EmailUserAboutNewMentionsBoxState: null,
    EmailUserAboutNewAnsweredAsksBoxState: null,
    NotificationSettingsForState: 'From people you follow',
    ApplySettingsForAllBlogsState: null,
  },
  reducers: {
    udpateEmailUserAboutNewFollowersBox: (state, action) => {
      state.EmailUserAboutNewFollowersBoxState = action.payload;
    },
    udpateEmailUserAboutNewRepliesBox: (state, action) => {
      state.EmailUserAboutNewRepliesBoxState = action.payload;
    },
    udpateEmailUserAboutNewMentionsBox: (state, action) => {
      state.EmailUserAboutNewMentionsBoxState = action.payload;
    },
    udpateEmailUserAboutNewAnsweredAsksBox: (state, action) => {
      console.log(action.payload);
      state.EmailUserAboutNewAnsweredAsksBoxState = action.payload;
    },
    udpateNotificationSettingsFor: (state, action) => {
      state.NotificationSettingsForState = action.payload;
    },
    udpateApplySettingsForAllBlogs: (state, action) => {
      state.ApplySettingsForAllBlogsState = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  udpateEmailUserAboutNewFollowersBox,
  udpateEmailUserAboutNewRepliesBox,
  udpateEmailUserAboutNewMentionsBox,
  udpateEmailUserAboutNewAnsweredAsksBox,
  udpateNotificationSettingsFor,
  udpateApplySettingsForAllBlogs,
} = NotificationsReducer.actions;
export default NotificationsReducer.reducer;
