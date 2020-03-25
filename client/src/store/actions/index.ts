import { v4 as uuidv4 } from "uuid";
import { SAVE_COMMENT, FETCH_COMMENTS, SET_ALERT, REMOVE_ALERT } from "./types";
import axios from "axios";
export function saveComment(comment: any) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export const setAlert = (msg: any, alertType: any) => (dispatch: any): any => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });
};
