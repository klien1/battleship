import { UPDATE_CHAT_MESSAGE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_CHAT_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
