// src/components/session/signup_form.js

import React from "react";
import { withRouter } from "react-router-dom";
import { GiElephant } from 'react-icons/gi'; 
import { Link } from "react-router-dom";

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
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signin-header">
          <Link to="/">
            <div className="logo-div">
              <GiElephant size={40} />
              <div>TestZoo</div>
            </div>
          </Link>
        </div>
        <div>Ready to enter the zoo?</div>
        {/* <div>Create your account</div> */}
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Submit" />
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
