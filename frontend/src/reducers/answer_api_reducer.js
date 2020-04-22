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
        let questionId;
        if (action.answers.data.length !== 0){
          questionId = action.answers.data[0].question
          newState[questionId] = action.answers.data
        }
        return newState;

      case REECEIVE_NEW_ANSWER:
        if (!!newState.all){
          newState.all.push(action.answer.data);
        }else{
          newState.all = [action.answer.data]
        }
        return newState;
        
      case REECEIVE_ANSWER:
        newState.answer = action.answer.data;
        return newState;

      case REMOVE_ANSWER:
        if (state.all) {
        const deleteanswer = state.all.filter(ans => ans._id !== action.answerId)
        return deleteanswer
        }

      default:
        return state;
    }
};
export default AnswersReducer;