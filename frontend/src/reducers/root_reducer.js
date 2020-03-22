import { combineReducers } from "redux";
import session from "./session_api_reducer";
import forms from "./form_api_reducer"
import errors from "./errors_reducer";
import questions from "./question_api_reducer";
import answers from "./answer_api_reducer";
import games from "./game_api_reducer";
import users from "./user_api_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  forms,
  questions,
  answers,
  games,
  users
});

export default RootReducer;
