import React from "react";
import { Route, Switch } from "react-router-dom";
import {  AuthRoute, ProtectedRoute, NewUserRoute } from "../util/route_util";

import SignInFormContainer from "./session/signin_form_container";

const App = () => (
  <div>
    <Switch>
    	<Route exact path="/" component={SignInFormContainer} />
    </Switch>
  </div>
);

export default App;
