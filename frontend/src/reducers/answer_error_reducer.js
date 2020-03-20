import {
    RECEIVE_ERRORS
  } from '../actions/answer_actions';
  
  const _nullErrors = [];
  
  const AnswerErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
export default AnswerErrorsReducer;