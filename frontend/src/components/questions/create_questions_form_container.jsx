
import { connect } from "react-redux";
import { composeForm } from "../../actions/form_actions";
import CreateQuestionForm from "./create_question_form";

const mapStateToProps = state => {
    
    return {
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeQuestionForm: question => dispatch(composeQuestionForm(question)),
    };
};

export default connect(mapStateToProps, null)(CreateQuestionForm);
