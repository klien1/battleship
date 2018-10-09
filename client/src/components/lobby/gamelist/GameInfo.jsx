import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

class GameInfo extends Component {
  renderGameRooms() {
    // console.log("redux games", this.props.game);

    const { filter, game } = this.props;
    return _.chain(game)
      .filter(item => {
        const regexString = `^.*${filter}.*$`;
        const regex = new RegExp(regexString, "g");
        return regex.test(item.name) || regex.test(item.host);
      })
      .map(({ name, host, numPlayers, password, spectate }) => {
        return (
          <div key={name} className="col s12 m4">
            <div className="card">
              <div style={{ marginLeft: "1em" }} className="card-title">
                {name}
                {password ? <i className="material-icons right">lock</i> : null}
              </div>
              <div className="card-content">
                <span className="col">Host: {host}</span>
              </div>
              <div className="card-action">
                {numPlayers < 2 ? (
                  <a href="#">Join Game</a>
                ) : spectate ? (
                  <a href="#">Spectate</a>
                ) : (
                  <a className="white-text" href="#">
                    &nbsp;
                  </a>
                )}
                <span className="right">
                  {numPlayers}
                  /2
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

const mapStateToProps = ({ game }) => {
  return {
    game
  };
};

export default connect(mapStateToProps)(GameInfo);
