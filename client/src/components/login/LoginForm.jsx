import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

import renderFormFields from "./renderFormFields";
import loginFormFields from "./loginFormFields";
import { authenticate } from "../../actions";

class SignupForm extends Component {
  // async login(values) {
  login(values) {
    const path = "/auth/login";
    const { authenticate, history } = this.props;
    // return await authenticate(values, history, path);
    // return authenticate(values, history, path);
    return authenticate(values, history, path);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="row" onSubmit={handleSubmit(this.login.bind(this))}>
        {renderFormFields(loginFormFields)}
        <button className="right btn light-blue" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginForm"
})(
  connect(
    null,
    { authenticate }
  )(withRouter(SignupForm))
);
