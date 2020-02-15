// jsx-props-no-spreading
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { SessionContext } from '../Context/SessionContext';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const [session, setSession] = useContext(SessionContext);

  if (session && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const userSession = JSON.parse(localStorage.getItem('userSession'));

  if (userSession && !session) {
    setSession(userSession);
    return <Redirect to="/dashboard" />;
  }

  if (!session && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
