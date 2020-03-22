import {
  getUser,
  getUsers
} from "../util/user_api_util";


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});


export const fetchUser = userId => dispatch =>{
  
  return getUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    );
  }


  export const fetchUsers = () => dispatch => {
    
    return getUsers().then(
      users => dispatch(receiveAllUsers(users)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

