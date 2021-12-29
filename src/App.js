/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  Likes,
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
  
  const {
    userInfo
  } = useSelector((state) => state.userInfo);

  useEffect(() => {
    updateNotifications();    
  }, [userInfo.id]);
  
  return (
    <>
    {localStorage.getItem('token') && (
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
      <Route exact  path="/dashboard">
        <NavBar />
        <Dashboard />
      </Route>
      <Route exact path="/likes">
        <NavBar />
        <Likes />
      </Route>
      <Route exact path="/following">
        <NavBar />
        <Following />
      </Route>
      {/*<Route exact path="/inbox">
        <NavBar />
        <Inbox />
      </Route>*/}
      <Route exact path="/customize">
        <Customize />
      </Route>      
      <Route path="/new">
        <New />
      </Route>
      <Route exact path="/forgetPassword">
        <Redirect to="/dashboard" />
        <ForgetPassword />
      </Route>
      <Route exact path="/register">
        <Redirect to="/dashboard" />
        <LogInNavBar />
        <Register />
      </Route>
      <Route exact path="/login">
        <Redirect to="/dashboard" />
        <SignUpNavBar />
        <LoginPage />
      </Route>
      <Route path="/settings">
        <Redirect to="/settings/account" />
        <Settings />
      </Route>
      <Route path="/blog/:blogName">
        <NavBar />
        <Blog />
      </Route>      
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
    )}
    {!localStorage.getItem('token') && (
      <Switch>
      <Route exact path="/">
        <HomePageNavBar />
        <MainPage />
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
      <Route path="*">
        <Redirect to="/" />
      </Route>      
    </Switch>
    )}
    </>
  );
};

export default App;
