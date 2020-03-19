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
            // return Object.assign({}, action.forms.data)

            return newState
        case RECEIVE_USER_FORMS:

            newState.user = action.forms.data;
            return newState;

        case REECEIVE_NEW_FORM:
            newState.new = action.form.data
            return newState;

        case REECEIVE_FORM:
            newState[action.form.id] = action.form.data
            return newState;

        case REMOVE_FORM:
            delete newState[action.formId]
            return newState

        default:
            return state;
    }
  };
  
  export default FormsReducer;