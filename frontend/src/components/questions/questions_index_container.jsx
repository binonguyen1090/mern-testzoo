import { connect } from "react-redux";
// import { fetchQuestions } from "../../actions/question_actions";
import QuestionsIndex from "./questions_index"

import { fetchQuestions, destroyQuestion} from "../../actions/question_actions";


const mapStateToProps = (state) => {
    return {
        form: state.forms.form || {},
        questions: state.questions.all || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: formId => dispatch(fetchQuestions(formId)),
        destroyQuestion: (form_id, question_id) => dispatch(destroyQuestion(form_id, question_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);
