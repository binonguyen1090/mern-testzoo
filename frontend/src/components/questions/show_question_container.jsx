import { connect } from "react-redux";
import { fetchQuestion } from "../../actions/question_actions";
import QuestionShow from "./show_question";


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    form: state.forms.form || {},
    question_id: ownProps.match.params.question_id,
    question: state.questions.question || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: formId => dispatch(fetchQuestion(formId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
