import { connect } from "react-redux";
import GameForm from "./game_form"
import { withRouter } from 'react-router-dom';
import { fetchForm } from '../../actions/form_actions';
import { startGame, fetchGames } from "../../actions/game_actions";

const mSTP = (state, ownProps) => {
    return {
        form_id: ownProps.match.params.form_id,
        currentUser: state.session.user,
        form: state.forms.form || {},
        game: state.games.new || {}
    }
};

const mDTP = dispatch => ({
    fetchForm: (formId) => dispatch(fetchForm(formId)),
    startGame: (game) => dispatch(startGame(game)),
    fetchGames: (formId) => dispatch(fetchGames(formId))
});

export default withRouter((connect(mSTP, mDTP)(GameForm)));