import { connect } from "react-redux";
import FormIndex from './forms_index'
import { withRouter } from 'react-router-dom';
import { fetchAllForms } from '../../actions/form_actions'


const mSTP = (state, ownProps) => {
    
    return {
        forms: state.forms.all
        // forms_index = Object.values(forms)
    }
};

const mDTP = dispatch => ({
    fetchAllForms: () => dispatch(fetchAllForms()),
    // deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),

});

export default withRouter((connect(mSTP, mDTP)(FormIndex)));

