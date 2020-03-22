import { connect } from "react-redux";

import AnswersIndex from "./answer_index";
import { fetchQuestionAnswers } from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.user,
    questionId: ownProps.questionId || "",
    form: state.forms.form || {},
    answers: state.answers.all || []
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchQuestionAnswers: questionId => dispatch(fetchQuestionAnswers(questionId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswersIndex);

