import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Main } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route pathname='/' exact component={Login} />
    </Switch>
  </Router>
);

export default Routes;
