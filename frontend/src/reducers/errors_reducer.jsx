// src/reducers/errors_reducer.js

import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import FormErrorsReducer from "./form_errors_reducer";
import QuestionErrorsReducer from "./question_error_reducer";
import AnswerErrorReducer from "./answer_error_reducer";
import GameErrorReducer from "./game_error_reducer"
// import ErrorsReducer from "./errors_reducer"
export default combineReducers({
  session: SessionErrorsReducer,
  form: FormErrorsReducer,
  question: QuestionErrorsReducer,
  answer: AnswerErrorReducer,
  game: GameErrorReducer
});
