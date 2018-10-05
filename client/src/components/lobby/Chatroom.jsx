import React, { Component } from "react";
import { connect } from "react-redux";
import renderList from "./renderList";
import axios from "axios";

class Chatroom extends Component {
  state = {
    msg: ""
  };

  sendMessage(e) {
    e.preventDefault();
    const { msg } = this.state;
    if (msg.length === 0) return;
    axios.post("/api/lobby/sendMessage", {
      msg
    });
    this.setState({
      msg: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidUpdate() {
    const autoScroll = document.querySelector("#autoScroll");
    if (autoScroll && autoScroll.checked) {
      const chat = document.querySelector(".chat");
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }
  }

  render() {
    return (
      <div>
        <div className="row noMarginBottom">
          <h5 className="col s6">Chatroom</h5>
          <label className="input-field col s4 right">
            <input id="autoScroll" type="checkbox" />
            <span>Auto-Scroll Chat</span>
          </label>
        </div>
        <div className="chatComponent">
          <div className="overflow chat">
            <ul className="chatList">
              {renderList(this.props.chat, "textWrap")}
            </ul>
          </div>
          <div className="row">
            <form
              className="formMessage col s12"
              onSubmit={this.sendMessage.bind(this)}
            >
              <input
                className="input-field col s9"
                onChange={this.handleChange.bind(this)}
                value={this.state.msg}
                type="text"
                name="msg"
                autoComplete="off"
              />
              <button
                className="input-field col s2 btn waves-effect waves-light"
                type="submit"
              >
                send
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ socket, chat }) => {
  return { socket, chat };
};
export default connect(mapStateToProps)(Chatroom);
