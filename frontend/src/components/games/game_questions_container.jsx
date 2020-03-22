import { connect } from 'react-redux';
import GameQuestions from "./game_questions";
import { fetchQuestions } from "../../actions/question_actions";
// import {fetchQuestionAnswers} from "../../actions/answer_actions"

const mSTP = (state, ownProps) => {
    return {
        // questionId: ownProps.question._id || "",
        // answers: state.answers.all || []
        questions: state.questions.all || []
    }
}

const mDTP = dispatch => {
    return {
        fetchQuestions: (formId) => dispatch(fetchQuestions(formId)),
        // fetchQuestionAnswers: questionId => dispatch(fetchQuestionAnswers(questionId))
    }
}

export default connect(mSTP, mDTP)(GameQuestions);