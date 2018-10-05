import { UPDATE_USER_LIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_LIST:
      return action.payload;
    default:
      return state;
  }
};
