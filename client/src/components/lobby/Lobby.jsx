import React, { Component } from "react";

import Chatroom from "./Chatroom";
import UserList from "./UserList";
import GameList from "./gamelist/GameList";
import { connect } from "react-redux";

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
          <GameList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ socket }) => {
  return { socket };
};

export default connect(mapStateToProps)(Lobby);
