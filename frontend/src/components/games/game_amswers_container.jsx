import { connect } from 'react-redux';
import GameAnswers from "./game_answers";
// import { fetchQuestions } from "../../actions/question_actions";
import {fetchQuestionAnswers} from "../../actions/answer_actions"

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
        fetchQuestionAnswers: questionId => dispatch(fetchQuestionAnswers(questionId))
    }
}

export default connect(mSTP, mDTP)(GameAnswers);