import{
    getQuestionAnswer,
    createQuestionAnswer,
    editQuestionAnswer,
    deleteAnswer
} from "../util/answer_api_util";

export const RECEIVE_QUESTION_ANSWERS = "RECEIVE_QUESTION_ANSWERS";
export const REECEIVE_ANSWER = "REECEIVE_ANSWER";

export const REECEIVE_NEW_ANSWER = "REECEIVE_NEW_ANSWER";

export const REMOVE_ANSWER = 'REMOVE_FORM';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveQuestionAnswers = answers => ({
    type: RECEIVE_QUESTION_ANSWERS,
    answers
}) 

const receiveAnswer = answer => ({
    type: REECEIVE_ANSWER,
    answer
}) 

const receiveNewAnswer = answer => ({
    type: REECEIVE_NEW_ANSWER,
    answer
})

const removeAnswer = answerId => ({
    type: REMOVE_ANSWER,
    answerId
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})

export const fetchQuestionAnswers = (questionId) => dispatch => getQuestionAnswer(questionId)
    .then(answers => dispatch(receiveQuestionAnswers(answers)), (errors) => dispatch(receiveErrors(errors.response.data)))

export const composeAnswer = answer => dispatch => {
         return createQuestionAnswer(answer).then(
           answer => dispatch(receiveNewAnswer(answer)),
           errors => dispatch(receiveErrors(errors.response.data))
         );}

export const modifyAnswer = ( answerId, answer) => dispatch => editQuestionAnswer( answerId, answer)
    .then(answer => dispatch(receiveAnswer(answer)), (errors) => dispatch(receiveErrors(errors.response.data)))

export const destroyAnswer = ( answerId) => dispatch => deleteAnswer( answerId)
    .then(() => dispatch(removeAnswer(answerId)), (errors) => dispatch(receiveErrors(errors.response.data)))
