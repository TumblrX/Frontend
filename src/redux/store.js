import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createBlog';
import DashBoardReducer from './DashBoardReducer';
import blogPosts from './blogPosts';
import LoginReducer from './login';
import EmailSectionReducer from './EmailSection';
import PasswordSectionReducer from './PasswordSection';
import SecuritySectionReducer from './SecuritySection';
import NotificationsReducer from './Notifications';
import RegisterReducer from './register';
import MainPageReducer from './mainPage';
import blogFollowers from './blogFollowers';
import userBlogsReducer from './userBlogs-slice';
import newTextPostReducer from './newTextPost-slice';
import ChatReducer from './ChatReducer';
import blog from './blog';
import blogDrafts from './blogDrafts';
import ExploreReducer from "./ExploreRecuder";

export default configureStore({
  reducer: {
    passwordInfo: PasswordSectionReducer,
    create: createReducer,
    DashBoard: DashBoardReducer,
    blogposts: blogPosts,
    blogfollowers: blogFollowers,
    login: LoginReducer,
    emailInfo: EmailSectionReducer,
    securityInfo: SecuritySectionReducer,
    notificationsInfo: NotificationsReducer,
    register: RegisterReducer,
    mainPage: MainPageReducer,
    userBlogs: userBlogsReducer,
    newTextPost: newTextPostReducer,
    Chat: ChatReducer,
    Blog: blog,
    BlogDrafts: blogDrafts,
    Explore: ExploreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
