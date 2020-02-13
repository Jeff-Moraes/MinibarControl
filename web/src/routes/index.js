import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { SessionProvider } from '../Context/SessionContext';

import LogIn from '../pages/LogIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <SessionProvider>
        <Route path="/" exact component={LogIn} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </SessionProvider>
    </Switch>
  );
}
