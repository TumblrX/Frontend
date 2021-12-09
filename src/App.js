import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Settings from "./pages/Settings/Settings";
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
} from "./pages/pages";
import { NavBar, ExploreLayout } from "./components/Layouts/Layouts";

const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        <NavBar />
        <MainPage />
      </Route>
      <Route exact path="/explore">
        <NavBar />

        <Explore />
      </Route>
      <Route exact path="/dashboard">
        <NavBar />
        <Dashboard />
      </Route>
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
        <NavBar />
        <Register />
      </Route>
      <Route exact path="/login">
        <NavBar />
        <LoginPage />
      </Route>
      <Route path="/settings">
        <Settings />
        <Redirect to="/settings/account" />
      </Route>
      <Route path="/blog">
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
