import { connect } from "react-redux";
import { composeAnswer, receiveErrors } from "../../actions/answer_actions";
import EditAnswerForm from "./edit_answer_form";
import { modifyAnswer, fetchAnswer, fetchQuestionAnswers } from "../../actions/answer_actions";
const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.user,
    answer_id: ownProps.match.params.answer_id || {},
    answer: state.answers.answer || {},
    errors: state.errors.answer || [],
    answers: state.answers.all || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestionAnswers: (questionId) =>
      dispatch(fetchQuestionAnswers(questionId)),
    fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId)),
    clearErrors: () => dispatch(receiveErrors([])),
    modifyAnswer: (answerId, answer) =>
      dispatch(modifyAnswer(answerId, answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm);
