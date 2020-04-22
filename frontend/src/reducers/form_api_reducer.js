import { RECEIVE_ALL_FORMS, 
    RECEIVE_USER_FORMS,
    REECEIVE_FORM,
    REECEIVE_NEW_FORM,
    REMOVE_FORM
} from '../actions/form_actions';
  const FormsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_FORMS:
            newState.all = action.forms.data
            return newState
        case RECEIVE_USER_FORMS:
            newState.all = action.forms.data;
            return newState;
        case REECEIVE_NEW_FORM:
            newState.new = action.form.data
            return newState;
        case REECEIVE_FORM:
            newState.form = action.form.data
            return newState;
        case REMOVE_FORM:
            if (state.all){
                const deletething = state.all.filter(form => form._id !== action.formId)
                return {all: deletething}
            }
        default:
            return state;
    }
  };
  export default FormsReducer;