import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Forgot, Main, Dashboard, Clients } from '../pages';
import PrivateRoute from './private';

const Routes = ({ signed }) => (
  <Router>
    <Switch>
      <PrivateRoute path='/' exact component={Dashboard} />
      <Route path='/login' exact component={Login} />
      <Route path='/forgot' exact component={Forgot} />
      <PrivateRoute path='/clients' exact component={Clients} />
    </Switch>
  </Router>
);

export default Routes;
