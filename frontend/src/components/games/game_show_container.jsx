import { connect } from "react-redux";
import GameShow from "./games_show"
import {fetchGame ,updateGame} from "../../actions/game_actions";
import { fetchForm } from "../../actions/form_actions";
import { fetchQuestions } from "../../actions/question_actions";
import { fetchQuestionAnswers } from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        gameId: ownProps.match.params.game_id,
        game: state.games.new || {},
        formId: state.games.new.form || "",
        form: state.forms.form || {},
        // questions: state.questions.all || [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGame: gameId => dispatch(fetchGame(gameId)),
        updateGame: (gameId, game) => dispatch(updateGame(gameId, game)),
        fetchForm: (formId) => dispatch(fetchForm(formId)),

        // fetchQuestionAnswers: (questionId) => dispatch(fetchQuestions(questionId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);