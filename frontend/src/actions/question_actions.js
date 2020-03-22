import {
  getQuestion, getFormQuestions,
  createQuestion,
  editQuestion,
  deleteQuestion
} from "../util/question_api_util";


export const RECEIVE_FORM_QUESTIONS = "RECEIVE_FORM_QUESTIONS";
export const REECEIVE_QUESTION = "REECEIVE_QUESTION";

export const REECEIVE_NEW_QUESTION = "REECEIVE_NEW_QUESTION";

export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveFormQuestions = questions => ({
    type: RECEIVE_FORM_QUESTIONS,
    questions
})

const receiveQuestion = question => ({
    type: REECEIVE_QUESTION,
    question
}) 

const receiveNewQuestion = question => ({
    type: REECEIVE_NEW_QUESTION,
    question
})

const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})


export const fetchQuestions = (formId) => dispatch => getFormQuestions(formId)
    .then(questions => dispatch(receiveFormQuestions(questions)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const composeQuestion = (question) => dispatch => createQuestion(question)
    .then(question => dispatch(receiveNewQuestion(question)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const fetchQuestion = question_id => dispatch =>{
         return getQuestion(question_id).then(
           question => dispatch(receiveQuestion(question)),
           errors => dispatch(receiveErrors(errors.responseJSON))
         )};


export const modifyQuestion = (question_id, question) => dispatch => editQuestion(question_id, question)
    .then(question => dispatch(receiveQuestion(question)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const destroyQuestion = (question_id) => dispatch => deleteQuestion(question_id)
    .then(() => dispatch(removeQuestion(question_id)), (errors) => dispatch(receiveErrors(errors.responseJSON)))
