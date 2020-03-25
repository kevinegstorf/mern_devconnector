import { combineReducers } from "redux";
import commentsReducer from "./comments";
import alertReducer from "./alert";

export default combineReducers({
  comments: commentsReducer,
  alert: alertReducer
});
