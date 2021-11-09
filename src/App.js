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
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route exact path='/explore'>
          <ExploreLayout>
            <Explore />
          </ExploreLayout>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/inbox'>
          <Inbox />
        </Route>
        <Route exact path='/new'>
          <New />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
