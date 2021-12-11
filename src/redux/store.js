import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';
import blogPosts from './blogPosts';
import LoginReducer from './login';
import RegisterReducer from './register';
import MainPageReducer from './mainPage';

export default configureStore({
  reducer: {
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    login: LoginReducer,
    register: RegisterReducer,
    mainPage: MainPageReducer,
  },
});
