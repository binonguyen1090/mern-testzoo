import { connect } from "react-redux";
import { composeQuestion, receiveErrors, fetchQuestion, modifyQuestion } from "../../actions/question_actions";
import EditQuestionForm from "./edit_question_form";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.question || [],
    question_id: ownProps.match.params.question_id || {},
    question: state.questions.question || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (question_id) => dispatch(fetchQuestion(question_id)),
    modifyQuestion: (question_id, question) => dispatch(modifyQuestion(question_id, question)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);
