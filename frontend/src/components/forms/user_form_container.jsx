import { connect } from "react-redux";
import UserForm from './user_form'
import { withRouter } from 'react-router-dom';
import { fetchUserForms , destroyForm} from '../../actions/form_actions'


const mSTP = (state, ownProps) => {
    
    return {
        currentUserID: state.session.user.id,
        forms: Object.values(state.forms.all) || []
    }
};

const mDTP = dispatch => ({
    fetchUserForms: (id) => dispatch(fetchUserForms(id)),
    destroyForm: (formId) => dispatch(destroyForm(formId)),

});

export default withRouter((connect(mSTP, mDTP)(UserForm)));

