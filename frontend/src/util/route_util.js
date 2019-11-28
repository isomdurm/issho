import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, signedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>

      // MODIFY redirect to
      !signedIn ? <Component {...props} /> : <Redirect to={`/users/:id`} />
    }
  />
);

const Protected = ({ component: Component, signedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      signedIn ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

const NewUser = ({ component: Component, signedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      signedIn ? <Redirect to="/signin" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({ signedIn: state.session.isAuthenticated });

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const NewUserRoute = withRouter(connect(mapStateToProps)(NewUser));
