import axios from 'axios';

export const getQuestionAnswer = (form_id, question_id) => {
    return axios.get(`/api/forms/${form_id}/questions/${question_id}/answers`)
};

export const createQuestionAnswer = (form_id, question_id, data) => {
    return axios.post(`/api/forms/${form_id}/questions/${question_id}/answers`, data)
}

export const editQuestionAnswer = (form_id, question_id, answser_id, data) => {
    return axios.patch(`/api/forms/${form_id}/questions/${question_id}/answers/${answser_id}`, data)
}

export const deleteAnswer = (form_id, question_id, answser_id) => {
    return axios.delete(`/api/forms/${form_id}/questions/${question_id}/answers/${answser_id}`)
};