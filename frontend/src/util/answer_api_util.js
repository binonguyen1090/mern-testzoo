import axios from 'axios';

export const getQuestionAnswer = ( question_id) => {
    return axios.get(`/api/answers/questions/${question_id}/`)
};

export const createQuestionAnswer = (data) => {
    return axios.post(`/api/answers`, data)
}

export const editQuestionAnswer = ( answser_id, data) => {
    return axios.patch(`/api/answers/${answser_id}`, data)
}

export const deleteAnswer = ( answser_id) => {
    return axios.delete(`/api/answers/${answser_id}`)
};