import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Forgot, Main, Dashboard } from '../pages';
import PrivateRoute from './private';

const Routes = ({ signed }) => (
  <Router>
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/forgot' exact component={Forgot} />
      <PrivateRoute path='/' exact component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
