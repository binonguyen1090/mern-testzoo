
import { connect } from "react-redux";
import { composeQuestion, receiveErrors } from "../../actions/question_actions";
import CreateQuestionForm from "./create_question_form";

const mapStateToProps = (state) => {
    
    return {
      currentUser: state.session.user,
      form: state.forms.form || {},
      errors: state.errors.question || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
      composeQuestion: question => dispatch(composeQuestion(question)),
      clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);
