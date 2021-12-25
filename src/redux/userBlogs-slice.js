import { createSlice } from '@reduxjs/toolkit';

const userBlogsSlice = createSlice({
  name: 'userBlogs',
  initialState: { userBlogs: [],postBlog:{} },
  reducers: {
    addUserBlogs: (state, { payload }) => {
      state.userBlogs = payload;
      state.postBlog = payload.find((userBlog)=>userBlog.isPrimary);
    },
    setPostBlog: (state, { payload }) => {
      state.postBlog = payload;
    },
  },
});
export const userBlogsActions = userBlogsSlice.actions;
export default userBlogsSlice.reducer;
