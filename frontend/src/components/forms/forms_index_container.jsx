import { connect } from "react-redux";
import FormIndex from './forms_index'
import { withRouter } from 'react-router-dom';
import { fetchAllForms } from '../../actions/form_actions';
// import { fetchGames } from "../../actions/game_actions";



const mSTP = (state) => {
    
    return {
        forms: state.forms.all,
        currentUser: state.session.user,
    }
};

const mDTP = dispatch => ({
    fetchAllForms: () => dispatch(fetchAllForms()),
    // fetchGames: (formId) => dispatch(fetchGames(formId))
});

export default withRouter((connect(mSTP, mDTP)(FormIndex)));

