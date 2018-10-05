import React, { Component } from "react";

import Chatroom from "./Chatroom";
import UserList from "./UserList";
import GameRoom from "./gameroom/GameRoom";

import "../../style/chatroom.css";

class Lobby extends Component {
  render() {
    return (
      <div>
        <div className="row noMarginBottom">
          <div className="col s8">
            <Chatroom />
          </div>
          <div className="col s4">
            <UserList />
          </div>
        </div>
        <div>
          <GameRoom />
        </div>
      </div>
    );
  }
}

export default Lobby;
