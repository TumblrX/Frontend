import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  NotFound,
  Dashboard,
  Explore,
  Inbox,
  New,
  LoginPage,
} from './pages/pages';
import { NavBar, ExploreLayout } from './components/Layouts/Layouts';
const App = () => {
  return (
    <Dashboard />
  );
};

export default App;
