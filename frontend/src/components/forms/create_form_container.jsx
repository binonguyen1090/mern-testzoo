
import { connect } from "react-redux";
import { composeForm , receiveErrors} from "../../actions/form_actions";
import CreateForm from "./create_form";

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        errors: state.errors.form || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
      composeForm: form => dispatch(composeForm(form)),
      clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
