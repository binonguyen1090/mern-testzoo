// src/components/session/login_form.js

import React from "react";
import { withRouter } from "react-router-dom";
import { GiElephant } from "react-icons/gi";
import { Link } from "react-router-dom";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the  page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemo(e, speed = 110) {
   
    // this.props.login(demo);
    e.preventDefault();
    const user = { email: "demo@yahoo.com", password: "123123" };
    let { email, password } = user;
    if (this.state.email !== email) {
      const inputUser = setInterval(() => {
        if (this.state.email !== email) {
          const temp = email.slice(0, this.state.email.length + 1);
          this.setState({ email: temp });
        } else {
          clearInterval(inputUser);
          animatePassword();
        }
      }, speed);
    }

    const animatePassword = () => {
      const inputPassword = setInterval(() => {
        if (this.state.password !== password)
          this.setState({
            password: password.slice(0, this.state.password.length + 1)
          });
        else {
          clearInterval(inputPassword);
          login();
        }
      }, speed);
    };
    const login = () => {
      this.props.login(this.state);
      this.setState({ username: "", password: "" });
    };





  }

  // Render the session errors if there are any
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
          <Link id="link-to-home" to="/">
            <div className="logo-div">
              <GiElephant size={90} />
              <div>TestZoo</div>
            </div>
          </Link>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div id="signup-quote">Welcome back!</div>
          <div id="user-input">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="(A)  Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="(B)  Password"
            />
          </div>
          <div id="login-submit">
            <input id="session-submit" type="submit" value="I'm back" />
            <div id="session-submit" onClick={this.handleDemo}>
              Try Demo
            </div>
          </div>
          <div id="already-user">
            Not a user yet?
            <Link to="/signup">Sign Up</Link>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
