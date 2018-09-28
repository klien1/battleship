import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";

import renderFormFields from "./renderFormFields";
import signupFormFields from "./signupFormFields";
import { authenticate } from "../../actions";

class SignupForm extends Component {
  signupUser(values) {
    const path = "/auth/signup";
    delete values.password2;
    const { authenticate, history } = this.props;
    authenticate(values, history, path);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="row" onSubmit={handleSubmit(this.signupUser.bind(this))}>
        {renderFormFields(signupFormFields)}
        <button className="right btn light-green" type="submit">
          Create Account
        </button>
      </form>
    );
  }
}

function validate(values) {
  const error = {};

  if (values.password !== values.password2) {
    const msg = "Password does not match.";
    error.password = msg;
    error.password2 = msg;
  }

  return error;
}

export default reduxForm({
  validate,
  form: "signupForm"
})(
  connect(
    null,
    { authenticate }
  )(withRouter(SignupForm))
);
