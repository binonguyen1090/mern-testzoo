import {
    RECEIVE_ERRORS
  } from '../actions/game_actions';
  
  const _nullErrors = [];
  
  const GameErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
export default GameErrorsReducer;