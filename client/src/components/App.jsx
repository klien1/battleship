import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import LoginForm from "./login/LoginForm";
import SignupForm from "./login/SignupForm";
import Lobby from "./lobby/Lobby";
import Landing from "./Landing";

import { connect } from "react-redux";
import { fetchUser } from "../actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/lobby" component={Lobby} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
