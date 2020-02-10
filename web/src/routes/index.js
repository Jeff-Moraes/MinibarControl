import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LogIn from '../pages/LogIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
