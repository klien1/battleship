import { SOCKET } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SOCKET:
      return action.payload;
    default:
      return state;
  }
};
