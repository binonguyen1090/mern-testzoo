
import { connect } from "react-redux";
import { composeForm , receiveErrors} from "../../actions/form_actions";
import CreateForm from "./create_form";
import { fetchAllForms } from "../../actions/form_actions";


const mapStateToProps = state => {
    return {
      forms: state.forms.all || [],
      currentUser: state.session.user,
      errors: state.errors.form || [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchAllForms: () => dispatch(fetchAllForms()),
      composeForm: (form) => dispatch(composeForm(form)),
      clearErrors: () => dispatch(receiveErrors([])),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
