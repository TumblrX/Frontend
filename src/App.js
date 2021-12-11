import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
          !localStorage.getItem('token') ? (
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
