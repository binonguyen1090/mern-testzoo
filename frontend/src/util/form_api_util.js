import axios from 'axios';

export const getForms = () => {
    return axios.get('/api/forms')
};

export const getUserForms = id => {
    return axios.get(`/api/forms/user/${id}`)
};

export const getForm = form_id => {
    return axios.get(`/api/forms/${form_id}`)
};

export const createForm = data => {
    return axios.post('/api/forms', data)
}

export const editForm = (data) => {
    return axios.patch(`/api/forms/${data.id}`, data)
}

export const deleteForm = form_id => {
    return axios.delete(`/api/forms/${form_id}`)
};