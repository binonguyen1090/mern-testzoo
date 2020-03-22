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
          <div className="splash-header">
            <Link id="link-to-home" to="/">
              <div className="navbar-logo">
                <GiElephant id='splash-ele' size={40} />
                <strong>TestZoo</strong>
              </div>
            </Link>
          </div>
          <div id="navbar-content">
            Create tests. Take tests. Beat your friends.
          </div>
          <Link id='navbar-link1' to={"/signup"}>Signup</Link>
          <Link id='navbar-link2' to={"/login"}>Login</Link>
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
