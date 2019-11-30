import React from "react";
import { Route, Switch } from "react-router-dom";
import {  AuthRoute, ProtectedRoute, NewUserRoute } from "../util/route_util";

import SignInFormContainer from "./session/signin_form_container";
import VerifyFormContainer from "./session/verify_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import ChatsContainer from "./chats/chats_container";
import MessagesContainer from "./chats/messages_container";

const App = () => (
  <div>
    <Switch>
    	<Route exact path="/" component={SignUpFormContainer} />
    	<Route exact path="/verify" component={VerifyFormContainer} />
    	<Route exact path="/signin" component={SignInFormContainer} />
    	<Route exact path="/home" component={ChatsContainer} />
    	<Route exact path="/chats" component={ChatsContainer} />
    	<Route exact path="/chats/:id" component={MessagesContainer} />
    </Switch>
  </div>
);

export default App;
