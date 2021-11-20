import React from 'react';

import { Dashboard } from './pages/pages';

const App = function () {
  return (
    <Dashboard />
    // <Switch>
    //   <Route exact path="/">
    //     <Redirect to="/dashboard" />
    //   </Route>
    //   <Route exact path="/explore">
    //     <NavBar />
    //     <ExploreLayout>
    //       <Explore />
    //     </ExploreLayout>
    //   </Route>
    //   <Route exact path="/dashboard">
    //     <NavBar />
    //     <Dashboard />
    //   </Route>
    //   <Route exact path="/inbox">
    //     <NavBar />
    //     <Inbox />
    //   </Route>
    //   <Route exact path="/new">
    //     <New />
    //   </Route>
    //   <Route exact path="/login">
    //     <LoginPage />
    //   </Route>
    //   <Route path="*">
    //     <NotFound />
    //   </Route>
    // </Switch>
  );
};

export default App;
