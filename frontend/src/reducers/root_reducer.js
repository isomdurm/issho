import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import chats from "./chats_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  chats
});

export default RootReducer;
