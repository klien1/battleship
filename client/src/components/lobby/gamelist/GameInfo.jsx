import React, { Component } from "react";
import _ from "lodash";

class GameInfo extends Component {
  renderGameRooms() {
    const games = {
      game1: {
        room: "game1",
        host: "jean",
        numPlayers: 1,
        privateGame: {
          lock: true,
          password: "helloworld!"
        }
      },
      game2: {
        room: "game2",
        host: "Chicken",
        numPlayers: 3
      },
      "SINK OR SWIM": {
        room: "SINK OR SWIM",
        host: "Goody",
        numPlayers: 4
      },
      "NEWBS ONLY!": {
        room: "NEWBS ONLY!",
        host: "nubiMe",
        numPlayers: 1,
        privateGame: {
          lock: true,
          password: "zx"
        }
      }
    };

    const { filter } = this.props;
    return _.chain(games)
      .filter(item => {
        const regexString = `^.*${filter}.*$`;
        const regex = new RegExp(regexString, "g");
        return regex.test(item.room) || regex.test(item.host);
      })
      .map(({ room, host, numPlayers, privateGame }) => {
        return (
          <div key={room} className="col s12 m4">
            <div className="card">
              <div style={{ marginLeft: "1em" }} className="card-title">
                {room}
                {privateGame ? null : (
                  <i className="material-icons right">lock</i>
                )}
              </div>
              <div className="card-content">
                <span className="col">Host: {host}</span>
              </div>
              <div className="card-action">
                {numPlayers < 4 ? (
                  <a href="#">Join Game</a>
                ) : (
                  <a href="#">Spectate</a>
                )}
                <span className="right">
                  {numPlayers}
                  /4
                </span>
              </div>
            </div>
          </div>
        );
      })
      .value();
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
