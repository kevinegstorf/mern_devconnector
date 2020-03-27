import { combineReducers } from "redux";
import commentsReducer from "./comments";
import alertReducer from "./alert";
import authReducer from "./auth";

export default combineReducers({
  comments: commentsReducer,
  alert: alertReducer,
  auth: authReducer
});
