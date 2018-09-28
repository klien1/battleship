import React, { Component } from "react";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render() {
    return (
      <div>
        <h1>Lobby</h1>
      </div>
    );
  }
}

export default Lobby;
