/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserBlogs } from './redux/userBlogs-actions';
import Settings from './pages/Settings/Settings';
import {
  NotFound,
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
  Customize,
} from './pages/pages';
import {
  NavBar,
  HomePageNavBar,
  LogInNavBar,
  SignUpNavBar,
  ExploreLayout,
} from './components/Layouts/Layouts';
import Chat from './components/Dashboard/Chat/Chat';

const App = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBlogs());
  }, [dispatch]);
  return (
    <Switch>
      <Route exact path="/">
        <HomePageNavBar />
        <MainPage />
      </Route>
      <Route exact path="/Chat">
        <Chat />
      </Route>
      <Route exact path="/explore">
        <NavBar />
        <ExploreLayout>
          <Explore />
        </ExploreLayout>
      </Route>
      <Route
        exact
        path="/dashboard"
        render={() => (
          localStorage.getItem('token') ? (
            <>
              <NavBar />
              <Dashboard />
            </>
          ) : (
            <Redirect to="/" />
          )
        )}
      />
      <Route exact path="/inbox">
        <NavBar />
        <Inbox />
      </Route>
      <Route exact path="/customize">
        <Customize />
      </Route>
      <Route exact path="/newblog">
        <CreateBlog />
      </Route>
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
      <Route path="/blog/:blogName">
        <NavBar />
        <Blog />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
