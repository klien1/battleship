import axios from "axios";
import { JOIN_LOBBY } from "./types";

export const joinLobby = () => async dispatch => {
  const user = await axios.get("/api/current_user");
  dispatch({
    type: JOIN_LOBBY,
    payload: user.data
  });
};
