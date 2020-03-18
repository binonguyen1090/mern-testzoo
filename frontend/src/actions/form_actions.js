import { getForms, getUserForms, getForm, createForm, editForm, deleteForm} from '../util/form_api_util';

export const RECEIVE_ALL_FORMS = "RECEIVRECEIVE_ALL_FORMSE_FORMS";
export const RECEIVE_USER_FORMS = "RECEIVE_USER_FORMS";
export const REECEIVE_FORM = "REECEIVE_FORM";

export const REECEIVE_NEW_FORM = "REECEIVE_NEW_FORM";

export const REMOVE_FORM = 'REMOVE_FORM';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveAllForms = forms => ({
    type: RECEIVE_ALL_FORMS,
    forms
})

const receiveUserForms = forms => ({
    type: RECEIVE_USER_FORMS,
    forms
}) 

const receiveForm = form => ({
    type: REECEIVE_FORM,
    form
}) 

const receiveNewForm = form => ({
    type: REECEIVE_NEW_FORM,
    form
})

const removeForm = formId => ({
    type: REMOVE_FORM,
    formId
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})


export const fetchAllForms = () => dispatch => getForms()
    .then(forms => dispatch(receiveAllForms(forms)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const fetchForm = (formId) => dispatch => getForm(formId)
    .then(form => dispatch(receiveForm(form)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const fetchUserForms = (id) => dispatch => getUserForms(id)
    .then(forms => dispatch(receiveUserForms(forms)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const composeForm = form => dispatch => createForm(form)
    .then(form => dispatch(receiveNewForm(form)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const modifyForm = form => dispatch => editForm(form)
    .then(form => dispatch(receiveForm(form)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const destroyForm = (formId) => dispatch => deleteForm(formId)
    .then(() => dispatch(removeForm(formId)), (errors) => dispatch(receiveErrors(errors.responseJSON)))
