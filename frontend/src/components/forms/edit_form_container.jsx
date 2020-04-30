import { connect } from "react-redux";
import { composeQuestion, receiveErrors, fetchQuestion, modifyQuestion } from "../../actions/question_actions";
import { fetchForm, modifyForm, fetchAllForms } from "../../actions/form_actions";
import EditForm from "./edit_form";

const mapStateToProps = (state, ownProps) => {
  return {
    forms: state.forms.all || [],
    currentUser: state.session.user,
    errors: state.errors.form || [],
    form_id: ownProps.match.params.form_id || {},
    form: state.forms.form || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllForms: () => dispatch(fetchAllForms()),
    fetchForm: (form_id) => dispatch(fetchForm(form_id)),
    modifyForm: (form_id, form) => dispatch(modifyForm(form_id, form)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
