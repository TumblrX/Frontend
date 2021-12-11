import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';
import blogPosts from './blogPosts';
import LoginReducer from './login';
import blogFollowers from './blogFollowers';

export default configureStore({
  reducer: {
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    blogfollowers: blogFollowers,
    login: LoginReducer,
  },
});
