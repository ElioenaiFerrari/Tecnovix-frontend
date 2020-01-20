import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route pathname='/' exact component={Main} />
    </Switch>
  </Router>
);

export default Routes;
