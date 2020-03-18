import {
    RECEIVE_ERRORS
  } from '../actions/form_actions';
  
  const _nullErrors = [];
  
  const FormErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
export default FormErrorsReducer;