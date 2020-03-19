import {
    RECEIVE_ERRORS
  } from '../actions/question_actions';
  
  const _nullErrors = [];
  
  const QuestionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
export default QuestionErrorsReducer;