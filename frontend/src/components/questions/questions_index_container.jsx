import { connect } from "react-redux";
// import { fetchQuestions } from "../../actions/question_actions";
import QuestionsIndex from "./questions_index"
import { withRouter } from "react-router-dom";


import { fetchQuestions, destroyQuestion} from "../../actions/question_actions";


const mapStateToProps = (state, ownProps) => {
  return {
    form: state.forms.form || {},
    questions: state.questions.all || [],
    form_id: ownProps.match.params.form_id,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchQuestions: (formId) => dispatch(fetchQuestions(formId)),
      destroyQuestion: (form_id, question_id) =>
      dispatch(destroyQuestion(form_id, question_id)),
    };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex)
);

