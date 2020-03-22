
import { connect } from "react-redux";
import { composeForm } from "../../actions/form_actions";
import HomePage from "./homepage";

const mapStateToProps = state => {

    return {
        currentUserID: state.session.user.id,
        currentUserName: state.session.user.username,
        // newForm: state.forms.new
    };
};

const mapDispatchToProps = dispatch => {
    // return {
    //     composeForm: form => dispatch(composeForm(form)),
    // };
};

export default connect(mapStateToProps, null)(HomePage);
