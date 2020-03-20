import { connect } from "react-redux";
// import { fetchQuestions } from "../../actions/question_actions";
import QuestionsShow from "./questions_show"

const mapStateToProps = (state, ownProps) => {
    return {
        // form: state.forms.form || {},
        // questions: state.questions.all || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchQuestions: formId => dispatch(fetchQuestions(formId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsShow);
