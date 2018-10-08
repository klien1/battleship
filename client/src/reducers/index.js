import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import userListReducer from "./userListReducer";
import socketReducer from "./socketReducer";
import chatReducer from "./chatReducer";
import gameReducer from "./gameReducer";
import headerReducer from "./headerReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  userList: userListReducer,
  socket: socketReducer,
  chat: chatReducer,
  game: gameReducer,
  header: headerReducer
});
