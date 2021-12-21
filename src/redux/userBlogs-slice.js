import { createSlice } from '@reduxjs/toolkit';

const userBlogsSlice = createSlice({
  name: 'userBlogs',
  initialState: { userBlogs: [] },
  reducers: {
    addUserBlogs: (state, { payload }) => {
      state.userBlogs = payload;
    },
  },
});

export const userBlogsActions = userBlogsSlice.actions;
export default userBlogsSlice.reducer;
