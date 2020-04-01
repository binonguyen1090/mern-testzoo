import { connect } from "react-redux";
import { composeAnswer } from "../../actions/answer_actions";
import CreateAnswerForm from "./create_answer_form";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    question_id: ownProps.match.params.question_id || {},
    form: state.forms.form || {},
    errors: state.errors.answer || []

    // newForm: state.forms.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeAnswer: answer => dispatch(composeAnswer(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnswerForm);
