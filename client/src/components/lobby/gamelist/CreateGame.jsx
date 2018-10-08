import React, { Component } from "react";
import { Modal, Button, Icon, Input, Row } from "react-materialize";
import axios from "axios";
import { withRouter } from "react-router-dom";
import hasSpecialChar from "../../../utils/hasSpecialChar";

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      roomNameErrorMessage: ""
    };
    this.passwordRef = React.createRef();
    this.switchBoxRef = React.createRef();
    this.submitRef = React.createRef();
  }
  async createGame(e) {
    e.preventDefault();
    const button = this.submitRef.current;
    button.disabled = true;

    const pw = this.passwordRef.current.state.value;
    const spectate = this.switchBoxRef.current.checked;

    const game = {
      name: this.state.roomName,
      password: pw && pw.trim().length === 0 ? null : pw,
      spectate
    };

    const newGame = await axios.post("/api/create_game", game);

    button.disabled = false;
    if (newGame.data.hasOwnProperty("error")) {
      this.setState({
        roomNameErrorMessage: `Room name [${
          this.state.roomName
        }] already exists.`
      });
      this.setState({ roomName: "" });
    } else {
      this.props.history.push(`/game/${newGame.data.id}`);
    }
  }

  handleChange(e) {
    if (!hasSpecialChar(e.target.value))
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  renderForm() {
    return (
      <Row>
        <Input
          onChange={this.handleChange.bind(this)}
          name="roomName"
          required
          type="text"
          label="Name"
          s={12}
          value={this.state.roomName}
        />
        <div className="red-text">{this.state.roomNameErrorMessage}</div>
        <Input type="text" ref={this.passwordRef} label="Password" s={12} />
        <Row>
          <label>Spectate</label>
          <div className="switch">
            <label>
              Off
              <input
                ref={this.switchBoxRef}
                defaultChecked
                // readOnly
                type="checkbox"
                id="cbval"
                label="Spectate"
              />
              <span className="lever" />
              On
            </label>
          </div>
          <button
            ref={this.submitRef}
            type="submit"
            className="input-field right btn wave-light"
          >
            Create
          </button>
        </Row>
      </Row>
    );
  }

  render() {
    return (
      <Modal
        header="Create Game"
        trigger={
          <Button>
            Create Game
            <Icon right>create</Icon>
          </Button>
        }
      >
        <form onSubmit={this.createGame.bind(this)}>{this.renderForm()}</form>
      </Modal>
    );
  }
}

export default withRouter(CreateGame);
