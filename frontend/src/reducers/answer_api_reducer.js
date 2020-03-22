import {
    RECEIVE_QUESTION_ANSWERS,
    REECEIVE_ANSWER,
    REECEIVE_NEW_ANSWER,
    REMOVE_ANSWER
} from "../actions/answer_actions";

const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_QUESTION_ANSWERS:
        newState.all = action.answers.data;
        let questionId = action.answers.data[0].question
        newState[questionId] = action.answers.data
        return newState;

      case REECEIVE_NEW_ANSWER:
        newState.all.push(action.answer.data);
        return newState;
        
      case REECEIVE_ANSWER:
        newState.answer = action.answer;
        return newState;

      case REMOVE_ANSWER:
        delete newState[action.answerId];
        return newState;

      default:
        return state;
    }
};
export default AnswersReducer;