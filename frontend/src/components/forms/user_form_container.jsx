import { connect } from "react-redux";
import UserForm from './user_form'
import { withRouter } from 'react-router-dom';
import { fetchUserForms } from '../../actions/form_actions'


const mSTP = (state, ownProps) => {
    
    return {
        currentUserID: state.session.user.id,
        forms: state.forms.all
    }
};

const mDTP = dispatch => ({
    fetchUserForms: (id) => dispatch(fetchUserForms(id)),

});

export default withRouter((connect(mSTP, mDTP)(UserForm)));

