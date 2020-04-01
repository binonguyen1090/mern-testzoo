
import { connect } from "react-redux";
import { composeForm } from "../../actions/form_actions";
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
