import {
  RECEIVE_ERRORS,
  RECEIVE_USER,
  RECEIVE_ALL_USERS
  
} from "../actions/user_actions";
const UserReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      
      newState.all = action.users.data;
      return newState;
    case RECEIVE_USER:
      
      newState.user = action.user.data;

      return newState;

    default:
      return state;
  }
};
export default UserReducer;
