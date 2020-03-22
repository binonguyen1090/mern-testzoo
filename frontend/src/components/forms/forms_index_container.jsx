import { connect } from "react-redux";
import FormIndex from './forms_index'
import { withRouter } from 'react-router-dom';
import { fetchAllForms } from '../../actions/form_actions';
import { fetchUser } from "../../actions/user_actions";



const mSTP = (state) => {
    return {
        forms: state.forms.all,
        currentUser: state.session.user,
        // user: state.users.user 
        // games: state.games.all
    }
};

const mDTP = dispatch => ({
    fetchAllForms: () => dispatch(fetchAllForms()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter((connect(mSTP, mDTP)(FormIndex)));

