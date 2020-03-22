// src/components/nav/navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiElephant } from "react-icons/gi"; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='in-navbar'>
          {/* <Link to={"/tweets"}>All Tweets</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_tweet"}>Write a Tweet</Link> */}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='out-navbar'>
          <div className="signin-header">
            <Link id="link-to-home" to="/">
              <div className="logo-div">
                <GiElephant size={90} />
                <div>TestZoo</div>
              </div>
            </Link>
          </div>
          <div id="navbar-content">
            Create tests. Take tests. Beat your friends.
          </div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar'>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
