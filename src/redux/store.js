import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';
import blogPosts from './blogPosts';
import LoginReducer from './login';
import EmailSectionReducer from './EmailSection';

export default configureStore({
  reducer: {
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    login: LoginReducer,
    emailInfo: EmailSectionReducer,
  },
});
