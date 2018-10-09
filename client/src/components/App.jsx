import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import LoginForm from "./login/LoginForm";
import SignupForm from "./login/SignupForm";
import Lobby from "./lobby/Lobby";
import Landing from "./Landing";
import Game from "./game/Game";

import PrivateRoute from "../containers/PrivateRoute";

import { connect } from "react-redux";
import { fetchUser } from "../actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.props.header && <Header />}
            <div className="container">
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                exact
                path="/login"
                component={LoginForm}
                auth={!auth}
                redirectPath="/lobby"
              />
              <PrivateRoute
                exact
                path="/signup"
                component={SignupForm}
                auth={!auth}
                redirectPath="/lobby"
              />

              <PrivateRoute
                exact
                path="/lobby"
                component={Lobby}
                auth={auth}
                redirectPath="/login"
              />

              <Route path="/game/:id" component={Game} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, header }) => {
  return { auth, header };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
