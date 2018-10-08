import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  auth,
  redirectPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: redirectPath, state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
