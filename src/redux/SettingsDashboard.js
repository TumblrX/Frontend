/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const SettingsDashboardReducer = createSlice({
  name: 'DashboardInfo',
  initialState: {
    bestStuffFirst: null,
    includeStuffInorbit: null,
    EnableColorizedTags: null,
    includeFollowedTagPosts: null,
    MessagingSounds: null,
    enableEndlessScrolling: null,
  },
  reducers: {
    updateBestStuffFirst: (state, action) => {
      state.bestStuffFirst = action.payload;
    },
    updateIncludeStuffInorbit: (state, action) => {
      state.includeStuffInorbit = action.payload;
    },
    updateEnableColorizedTags: (state, action) => {
      state.EnableColorizedTags = action.payload;
    },
    updateIncludeFollowedTagPosts: (state, action) => {
      state.includeFollowedTagPosts = action.payload;
    },
    updateMessagingSounds: (state, action) => {
      state.MessagingSounds = action.payload;
    },
    updateEnableEndlessScrolling: (state, action) => {
      state.enableEndlessScrolling = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {
  updateBestStuffFirst,
  updateIncludeStuffInorbit,
  updateEnableColorizedTags,
  includeFollowedTagPosts,
  updateMessagingSounds,
  updateEnableEndlessScrolling,
} = SettingsDashboardReducer.actions;
export default SettingsDashboardReducer.reducer;
