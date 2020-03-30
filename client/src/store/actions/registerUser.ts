import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
import axios from "axios";
import { setAlert } from "./setAlert";

export const registerUser = ({ name, email, password }: any) => async (
  dispatch: any
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
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
