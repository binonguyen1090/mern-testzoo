import{
    getQuestionAnswer,
    createQuestionAnswer,
    editQuestionAnswer,
    deleteAnswer
} from "../util/answer_api_util";

export const RECEIVE_QUESTION_ANSWERS = "RECEIVE_QUESTION_ANSWERS";
export const REECEIVE_ANSWER = "REECEIVE_FORM";

export const REECEIVE_NEW_ANSWER = "REECEIVE_NEW_FORM";

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

export const fetchQuestionAnswers = (formId, questionId) => dispatch => getQuestionAnswer(formId, questionId)
    .then(answers => dispatch(receiveQuestionAnswers(answers)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const composeAnswer = (formId, questionId, answer) => dispatch => createQuestionAnswer(formId, questionId, answer)
    .then(answer => dispatch(receiveNewAnswer(answer)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const modifyAnswer = (formId, questionId, answerId, answer) => dispatch => editQuestionAnswer(formId, questionId, answerId, answer)
    .then(answer => dispatch(receiveAnswer(answer)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const destroyAnswer= (formId, questionId, answerId) => dispatch => deleteAnswer(formId, questionId, answerId)
    .then(() => dispatch(removeAnswer(answerId)), (errors) => dispatch(receiveErrors(errors.responseJSON)))
