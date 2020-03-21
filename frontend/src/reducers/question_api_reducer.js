import { 
    RECEIVE_FORM_QUESTIONS, 
    REECEIVE_QUESTION,
    REECEIVE_NEW_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_actions';
  
  const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FORM_QUESTIONS:
            newState.all = action.questions.data
            return newState

        case REECEIVE_QUESTION:
            newState[action.question.id] = action.question.data
            return newState;

        case REECEIVE_NEW_QUESTION:
            newState.all.push(action.question.data)

            return newState;

        case REMOVE_QUESTION:
            const deleteThing = state.all.findIndex(quest => {
                return quest._id == action.questionId
            })
            newState.all.splice(deleteThing, 1);
            return newState

        default:
            return state;
    }
  };
  
  export default QuestionsReducer;