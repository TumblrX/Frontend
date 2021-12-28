import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./createBlog";
import DashBoardReducer from "./DashBoardReducer";
import blogPosts from "./blogPosts";
import LoginReducer from "./login";
import EmailSectionReducer from "./EmailSection";
import PasswordSectionReducer from "./PasswordSection";
import SecuritySectionReducer from "./SecuritySection";
import NotificationsReducer from "./Notifications";
import RegisterReducer from "./register";
import MainPageReducer from "./mainPage";
import blogFollowers from "./blogFollowers";
import userBlogsReducer from "./userBlogs-slice";
import newTextPostReducer from "./newTextPost-slice";
import ChatReducer from "./ChatReducer";
import blog from "./blog";
import BlogView from "./blogview";
import blogDrafts from "./blogDrafts";
import Customize from "./Customize";
import ExploreRecuder from "./ExploreRecuder";
import DropDownInbox from './DropDownInbox';
import SearchReducer from "./SearchReducer";
import NavNotificationsReducer  from './NavNotifications';
import userFollowing from "./userFollowing";
import UserInfoReducer  from "./UserInfo";
import ForgetPasswordReducer from './forgetPassword'
export default configureStore({
  reducer: {
    passwordInfo: PasswordSectionReducer,
    create: createReducer,
    DashBoard: DashBoardReducer,
    DropDownInbox: DropDownInbox,
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
    BlogView: BlogView,
    BlogDrafts: blogDrafts,
    customize: Customize,
    Explore: ExploreRecuder,
    Search: SearchReducer,
    following: userFollowing,
    navNotifications : NavNotificationsReducer ,
    userInfo: UserInfoReducer ,
    forgetPassword :ForgetPasswordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
