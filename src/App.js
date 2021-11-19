import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Blog from './pages/Blog/Blog';

const App = () => {
  return (
    <div>
      <Blog/>
    </div>
  );
};

export default App;