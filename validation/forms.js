const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateFormInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 1, max: 50 })) {
    errors.title = 'Title must be between 1 and 50 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  data.category = validText(data.category) ? data.category : '';

  if (!Validator.isLength(data.category, { min: 3, max: 15 })) {
    errors.category = 'Category must be between 3 and 15 characters';
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};