import axios from 'axios';

export const getFormQuestions = form_id => {
    return axios.get(`/api/questions/forms/${form_id}`);
};
// export const getFormQuestions = form_id => {
//     return axios.get(`/api/forms/${form_id}/questions`)
// };


export const createQuestion = (data) => {
    return axios.post(`/api/questions`, data)
}

export const editQuestion = (question_id, data) => {
    return axios.patch(`/api/questions/${question_id}`, data)
}

export const deleteQuestion = (question_id) => {
    return axios.delete(`/api/questions/${question_id}`)
}