const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateAnswerInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, { min: 1, max: 50 })) {
    errors.Body = "Body must be between 5 and 100 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Answer field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};