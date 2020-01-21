import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Forgot, Main, Dashboard } from '../pages';
import PrivateRoute from './private';

const Routes = ({ signed }) => (
  <Router>
    <Switch>
      <PrivateRoute path='/' exact component={Main} />
      <Route path='/login' exact component={Login} />
      <Route path='/forgot' exact component={Forgot} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
