// src/reducers/errors_reducer.js

import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import FormErrorsReducer from "./form_errors_reducer";
import QuestionErrorsReducer from "./question_error_reducer"
// import ErrorsReducer from "./errors_reducer"
export default combineReducers({
  session: SessionErrorsReducer,
  form: FormErrorsReducer,
  question: QuestionErrorsReducer
  // error: ErrorsReducer
});
