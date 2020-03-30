// src/components/session/signup_form.js

import React from "react";
import { withRouter } from "react-router-dom";
import { GiElephant } from 'react-icons/gi'; 
import { Link } from "react-router-dom";
import './sign_up_form.css';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signin-header">
          <Link id='link-to-home' to="/">
            <div className="logo-div">
              <GiElephant size={90} />
              <div>TestZoo</div>
            </div>
          </Link>
        </div>
        {/* <div>Create your account</div> */}
        <form className="signup-form" onSubmit={this.handleSubmit}>
        <div id="signup-quote">Ready to enter the zoo?</div>
          <div id="user-input">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="(A)  Username"
            />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="(B)  Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="(C)  Password"
            />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="(D)  Confirm Password"
            />
          </div>
          <input id='session-submit' type="submit" value="I'm ready" />
          <div id="already-user">
            Already an user?
            <Link to="/login">Log In</Link>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
