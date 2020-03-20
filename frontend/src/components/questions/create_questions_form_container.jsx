
import { connect } from "react-redux";
import { composeQuestion } from "../../actions/question_actions";
import CreateQuestionForm from "./create_question_form";

const mapStateToProps = (state, ownProps) => {
    
    return {
      currentUser: state.session.user,
      form: state.forms.form || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeQuestion: (form_id, question) => dispatch(composeQuestion(form_id,question)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);
