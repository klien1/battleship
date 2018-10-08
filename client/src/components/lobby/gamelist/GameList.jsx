import React, { Component } from "react";
import GameInfo from "./GameInfo";
import SearchBar from "../SearchBar";
import InvitePlayer from "./InvitePlayer";
import CreateGame from "./CreateGame";

import { connect } from "react-redux";
import { fetchGames } from "../../../actions";

import hasSpecialChar from "../../../utils/hasSpecialChar";

class GameList extends Component {
  state = {
    filter: ""
  };

  handleChange(e) {
    e.preventDefault();
    const { value } = e.target;
    if (!hasSpecialChar(value))
      this.setState({
        filter: value
      });
  }

  updateGameList() {
    this.props.fetchGames();
  }

  componentWillMount() {
    this.updateGameList();
  }

  render() {
    return (
      <div className="">
        <div className="row col s12 noMarginBottom">
          <div className="col s3 left">
            <h5 className="left">GameList</h5>
            <div className="left input-field">
              <button
                className="btn blue lighten-5 waves-effect"
                onClick={() => this.props.fetchGames()}
                style={{ marginLeft: "1em" }}
              >
                <i className="material-icons">refresh</i>
              </button>
            </div>
          </div>
          <div className="col s4 left">
            <SearchBar
              changeState={this.handleChange.bind(this)}
              filter={this.state.filter}
            />
          </div>
          <div className="right">
            <InvitePlayer />
          </div>
          <div className="right">
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

export default connect(
  null,
  { fetchGames }
)(GameList);
