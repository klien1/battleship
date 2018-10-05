import React, { Component } from "react";
class GameInfo extends Component {
  renderGameRooms() {
    const games = [
      "game1",
      "game2",
      "game3",
      "game1",
      "game2",
      "game3",
      "game1",
      "game2",
      "game3",
      "game1",
      "game2",
      "game3"
    ];
    return games.map(roomName => {
      return (
        <div className="col s12 m3">
          <div className="card">
            {/* <div className="col s6"> */}
            <div className="card-title">
              {roomName}
              <i className="material-icons right">lock</i>
            </div>
            <div className="card-content">
              <span className="col">Host</span>
            </div>
            <div className="card-action">
              <a href="#">Join Game</a>
              <span className="right">players: 1/4</span>
            </div>
            {/* </div> */}
            {/* <div className="col s6"> */}
            {/* </div> */}
            {/* <i className="material-icons right">lock_open</i> */}
            {/* <i className="material-icons right">lock_outline</i> */}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row noMarginBottom gameInfo">
        {this.renderGameRooms()}
      </div>
    );
  }
}

export default GameInfo;
