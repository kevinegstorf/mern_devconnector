import { v4 as uuidv4 } from "uuid";
import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./types";
import axios from "axios";
import { setAlert } from "./setAlert";

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

const Hello = () => {
  console.log("hello");
};

export const register = ({ name, email, password }: any) => async (
  dispatch: any
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export { setAlert } from "./setAlert";
