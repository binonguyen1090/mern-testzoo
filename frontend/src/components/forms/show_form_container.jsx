import { connect } from "react-redux";
import ShowForm from './show_form'
import { withRouter } from 'react-router-dom';
import { fetchForm } from '../../actions/form_actions'
import { fetchQuestions, destroyQuestion} from "../../actions/question_actions";


const mSTP = (state, ownProps) => {
    return {
        form_id: ownProps.match.params.form_id,
        form: state.forms.form || {},
        questions: state.questions.all || []
    }
};

const mDTP = dispatch => ({
    fetchForm: (formId) => dispatch(fetchForm(formId)),
    fetchQuestions: formId => dispatch(fetchQuestions(formId)),
    destroyQuestion: (form_id, question_id) => dispatch(destroyQuestion(form_id, question_id))
});

export default withRouter((connect(mSTP, mDTP)(ShowForm)));

