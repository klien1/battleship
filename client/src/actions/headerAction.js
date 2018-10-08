import { SHOW_HEADER, HIDE_HEADER } from "../actions/types";

export const displayHeader = () => dispatch => {
  dispatch({ type: SHOW_HEADER });
};

export const hideHeader = () => dispatch => {
  dispatch({ type: HIDE_HEADER });
};
