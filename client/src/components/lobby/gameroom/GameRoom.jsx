import React, { Component } from "react";
import GameInfo from "./GameInfo";
import SearchBar from "../SearchBar";
import InvitePlayer from "./InvitePlayer";
import CreateGame from "./CreateGame";

class GameRoom extends Component {
  state = {
    filter: ""
  };

  handleChange(e) {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
      <div className="">
        <div className="row col s12 noMarginBottom">
          <h5 className="col s2 left">GameRoom</h5>
          <div className="col s4 left">
            <SearchBar filter={this.handleChange.bind(this)} />
          </div>
          <div className="right">
            <InvitePlayer />
            <CreateGame />
          </div>
        </div>
        <div>
          <GameInfo filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default GameRoom;
