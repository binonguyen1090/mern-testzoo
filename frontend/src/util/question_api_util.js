import axios from 'axios';

export const getFormQuestions = form_id => {
    return axios.get(`/api/forms/${form_id}/questions`);
};
// export const getFormQuestions = form_id => {
//     return axios.get(`/api/forms/${form_id}/questions`)
// };


export const createQuestion = (form_id, data) => {
    return axios.post(`/api/forms/${form_id}/questions`, data)
}

export const editQuestion = (form_id, question_id, data) => {
    return axios.patch(`/api/forms/${form_id}/questions/${question_id}`, data)
}

export const deleteQuestion = (form_id, question_id) => {
    return axios.delete(`/api/forms/${form_id}/questions/${question_id}`)
}