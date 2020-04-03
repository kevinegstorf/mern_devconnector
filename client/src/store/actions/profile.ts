import axios from "axios";
import { setAlert } from "./setAlert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current users profile

export const getCurrentProfile = () => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "x-header-token": localStorage.token
      }
    };
    const res = await axios.get("http://localhost:5000/api/profile/me", config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.status }
    });
  }
};
