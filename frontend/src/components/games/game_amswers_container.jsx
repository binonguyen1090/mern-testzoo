import { connect } from 'react-redux';
import GameAnswers from "./game_answers";
// import { fetchQuestions } from "../../actions/question_actions";
import {fetchQuestionAnswers} from "../../actions/answer_actions";
import { updateGame } from "../../actions/game_actions";

const mSTP = (state, ownProps) => {
    return {
        questionId: ownProps.questionId || "",
        answers: state.answers
        // questions: state.questions.all || []
    }
}

const mDTP = dispatch => {
    return {
        // fetchQuestions: (formId) => dispatch(fetchQuestions(formId)),
        fetchQuestionAnswers: questionId => dispatch(fetchQuestionAnswers(questionId)),
        updateGame: (gameId, game) => dispatch(updateGame(gameId, game))
    }
}

export default connect(mSTP, mDTP)(GameAnswers);