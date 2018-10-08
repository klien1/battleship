import { SHOW_HEADER, HIDE_HEADER } from "../actions/types";

export default (state = true, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return true;
    case HIDE_HEADER:
      return false;
    default:
      return state;
  }
};
