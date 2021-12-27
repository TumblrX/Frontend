/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserBlogs } from "./redux/userBlogs-actions";
import Search from "./pages/Search/Search";
import Settings from "./pages/Settings/Settings";
import {
  NotFound,
  ServerError,
  Dashboard,
  Explore,
  Inbox,
  New,
  MainPage,
  Register,
  LoginPage,
  ForgetPassword,
  CreateBlog,
  Blog,
  BlogView,
  Customize,
  Following,
} from "./pages/pages";
import {
  NavBar,
  HomePageNavBar,
  LogInNavBar,
  SignUpNavBar,
  ExploreLayout,
} from './components/Layouts/Layouts';
import Chat from './components/Dashboard/Chat/Chat';
import { useSelector } from 'react-redux';
import updateNotifications from './UpdateNotifications'

const App = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBlogs());
  }, [dispatch]);
  const {
    id, userInfo
  } = useSelector((state) => state.userInfo);
  useEffect(() => {
    updateNotifications(userInfo.id);    
  }, [userInfo.id]);
  return (
    <Switch>
      <Route exact path="/">
        <HomePageNavBar />
        <MainPage />
      </Route>
      <Route exact path="/Chat">
        <Chat />
      </Route>
      <Route path="/explore">
        <Redirect to="/explore/recommended-for-you" />
        <NavBar />
        <Explore />
      </Route>
      <Route path="/search">
        <NavBar />
        <Search />
      </Route>
      <Route
        exact
        path="/dashboard"
        render={() =>
          localStorage.getItem("token") ? (
            <>
              <NavBar />
              <Dashboard />
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
      {/* <Route
        exact
        path="/following"
        render={() => (
          localStorage.getItem('token') ? (
            <>
              <NavBar />
              <Following />
            </>
          ) : (
            <Redirect to="/" />
          )
        )}
      /> */}
      <Route exact path="/following">
        <NavBar />
        <Following />
      </Route>
      <Route exact path="/inbox">
        <NavBar />
        <Inbox />
      </Route>
      <Route exact path="/customize">
        <Customize />
      </Route>
      <Route
        exact
        path="/newblog"
        render={() =>
          localStorage.getItem("token") ? (
            <>
              <NavBar />
              <CreateBlog />
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route path="/new">
        <New />
      </Route>
      <Route exact path="/forgetPassword">
        <ForgetPassword />
      </Route>
      <Route exact path="/register">
        <LogInNavBar />
        <Register />
      </Route>
      <Route exact path="/login">
        <SignUpNavBar />
        <LoginPage />
      </Route>
      <Route path="/settings">
        <Redirect to="/settings/account" />
        <Settings />
      </Route>
      <Route
        path="/blog/:blogName"
        render={() =>
          localStorage.getItem("token") ? (
            <>
              <NavBar />
              <Blog />
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route exact path="/blogview">
        <BlogView />
      </Route>
      <Route path="/servererror">
        <ServerError />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
