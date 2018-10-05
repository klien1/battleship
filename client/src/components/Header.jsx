import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    const { user } = this.props;
    switch (user) {
      case null:
        return;
      case false:
        return [
          <li key="login">
            <Link to="/login">Login</Link>
          </li>,
          <li key="signup">
            <Link to="/signup">Signup</Link>
          </li>
        ];
      default:
        return [
          <li key="welcome">Welcome {user.username}</li>,
          <li key="lobby">
            <Link to="/lobby">Lobby</Link>
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue darken-3">
          <Link to="/" style={{ marginLeft: "2em" }}>
            Battleship
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps)(Header);
