import React, { Component } from "react";
import { connect } from "react-redux";
import { hideHeader, displayHeader } from "../../actions";

class Game extends Component {
  componentWillMount() {
    this.props.hideHeader();
  }

  componentWillUnmount() {
    this.props.displayHeader();
  }

  displayId() {
    console.log(this.props.match);
    console.log(this.props.match.params);
  }

  render() {
    return (
      <div>
        <h1>Game</h1>
        <h1>{this.displayId()}</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { hideHeader, displayHeader }
)(Game);
