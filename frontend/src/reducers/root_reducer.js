import { combineReducers } from "redux";
import session from "./session_api_reducer";
import forms from "./form_api_reducer"
import errors from "./errors_reducer";
import questions from "./question_api_reducer";
// import errors from "./errors_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  forms,
  questions
});

export default RootReducer;
