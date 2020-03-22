import { connect } from "react-redux";
import ShowForm from './show_form'
import { withRouter } from 'react-router-dom';
import { fetchForm } from '../../actions/form_actions'

const mSTP = (state, ownProps) => {
    return {
        form_id: ownProps.match.params.form_id,
        form: state.forms.form || {},
    }
};

const mDTP = dispatch => ({
    fetchForm: (formId) => dispatch(fetchForm(formId)),
});

export default withRouter((connect(mSTP, mDTP)(ShowForm)));

