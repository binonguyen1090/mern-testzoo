// src/components/nav/navbar_container.js

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUserName: state.session.user.username
});

export default connect(mapStateToProps, { logout })(NavBar);
