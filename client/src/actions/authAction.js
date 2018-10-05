import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const request = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: request.data
  });
};

export const authenticate = (values, history, path) => async dispatch => {
  const request = await axios.post(path, values);
  // returns id and username in request.data

  if (!request.data.hasOwnProperty("error")) {
    dispatch({
      type: FETCH_USER,
      payload: request.data
    });
    history.push("/lobby");
  } else {
    alert(request.data.error);
  }
};
