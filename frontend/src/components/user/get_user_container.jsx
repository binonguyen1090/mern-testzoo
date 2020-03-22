import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser,fetchUsers } from "../../actions/user_actions";


import GetUser from "./get_user"

const mSTP = state => {
  return {
    forms: state.forms.all,
    currentUser: state.session.user,
    user: state.users.user || "",
    users: state.users.all || []
  };
};

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),

});

export default withRouter(connect(mSTP, mDTP)(GetUser));
