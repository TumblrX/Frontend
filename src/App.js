import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  NotFound,
  Dashboard,
  Explore,
  Inbox,
  New,
  LoginPage,
  ForgetPassword,
} from './pages/pages';
import { NavBar, ExploreLayout } from './components/Layouts/Layouts';

const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route exact path="/explore">
        <NavBar />
        <ExploreLayout>
          <Explore />
        </ExploreLayout>
      </Route>
      <Route exact path="/dashboard">
        <NavBar />
        <Dashboard />
      </Route>
      <Route exact path="/inbox">
        <NavBar />
        <Inbox />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route exact path="/forgetPassword">
        <ForgetPassword />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
