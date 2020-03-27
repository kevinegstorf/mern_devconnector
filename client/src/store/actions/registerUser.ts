import { v4 as uuidv4 } from "uuid";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
import axios from "axios";
import { setAlert } from "./setAlert";

type Props = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = ({ name, email, password }: Props) => async (
  dispatch: ({ type, payload }: any) => void
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
      errors.forEach((error: { msg: string }) =>
        dispatch(setAlert(error.msg, "danger"))
      );
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
