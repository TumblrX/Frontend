import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { NotFound, Dashboard, Explore, Inbox, New } from './pages/pages';
import { NavBar, ExploreLayout } from './components/Layouts/Layouts';
const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route exact path='/explore'>
          <NavBar />
          <ExploreLayout>
            <Explore />
          </ExploreLayout>
        </Route>
        <Route exact path='/dashboard'>
          <NavBar />
          <Dashboard />
        </Route>
        <Route exact path='/inbox'>
          <NavBar />
          <Inbox />
        </Route>
        <Route path='/new'>
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
