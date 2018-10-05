import React, { Component } from "react";
import GameInfo from "./GameInfo";
import SearchBar from "./SearchBar";

class GameRoom extends Component {
  state = {
    filter: ""
  };
  render() {
    return (
      <div className="">
        <div className="row col s12 noMarginBottom">
          <h5 className="col s2 left">GameRoom</h5>
          <div className="col s4 left">
            <SearchBar />
          </div>
          <button className="right btn">Invite</button>
          <button className="right btn">Create Game</button>
        </div>
        <div>
          <GameInfo />
        </div>
      </div>
    );
  }
}

export default GameRoom;
