import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGNOUT = "RECEIVE_USER_SIGNOUT";
export const RECEIVE_USER_SIGNIN = "RECEIVE_USER_SIGNIN";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGNIN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signoutUser = () => ({
  type: RECEIVE_USER_SIGNOUT
});

export const signup = user => dispatch =>
  APIUtil.signup(user)
    .then(() => dispatch(receiveUserSignIn()),
      err => dispatch(receiveErrors(err.response.data))
  );

export const signin = user => dispatch =>
  APIUtil.signin(user)
    .then(res => {
      console.log(res);
      
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const signout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(signoutUser());
};
