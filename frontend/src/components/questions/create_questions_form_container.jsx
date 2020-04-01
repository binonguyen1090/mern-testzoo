
import { connect } from "react-redux";
import { composeQuestion } from "../../actions/question_actions";
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
        composeQuestion: (question) => dispatch(composeQuestion(question)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);
