import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';
import blogPosts from './blogPosts';
import LoginReducer from './login';
import EmailSectionReducer from './EmailSection';
import PasswordSectionReducer from './PasswordSection';
import SecuritySectionReducer from './SecuritySection';

export default configureStore({
  reducer: {
    passwordInfo: PasswordSectionReducer,
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    login: LoginReducer,
    emailInfo: EmailSectionReducer,
    securityInfo: SecuritySectionReducer,
  },
});
