import {
  JOIN_LOBBY,
  UPDATE_USER_LIST,
  SOCKET,
  UPDATE_CHAT_MESSAGE
} from "../actions/types";
import io from "socket.io-client";

export const createSocket = store => next => action => {
  if (action.type === JOIN_LOBBY) {
    const lobby = io.connect("/lobbyChat");
    lobby.on("userList", userList => {
      store.dispatch({
        type: UPDATE_USER_LIST,
        payload: userList
      });
    });

    lobby.on("chatMessage", chatBox => {
      const { username, msg } = chatBox;
      const curDate = new Date(Date.now());

      const curTime = `${
        curDate.getHours() === 0 ? 12 : curDate.getHours() % 12
      }:${curDate.getMinutes()}`;
      const period = curDate.getHours() >= 12 ? "PM" : "AM";
      const message = `${username} [${curTime}${period}]: ${msg}`;
      store.dispatch({
        type: UPDATE_CHAT_MESSAGE,
        payload: message
      });
    });

    lobby.emit("username", action.payload.username);
    store.dispatch({
      type: SOCKET,
      payload: lobby
    });
  } else {
    next(action);
  }
};
