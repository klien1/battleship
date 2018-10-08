import axios from "axios";
import { FETCH_GAMES } from "./types";

export const fetchGames = () => async dispatch => {
  const gamesList = await axios.get("/api/gamelist");
  dispatch({
    type: FETCH_GAMES,
    payload: gamesList.data
  });
};
