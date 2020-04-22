const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateAnswerInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, { min: 1, max: 50 })) {
    errors.body = "Body must be between 1 and 50 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Answer field is required";
  }


  data.correct = validText(data.correct) ? data.correct : "";

  if (!["True","true","TRUE", "false", "False", "FALSE"].includes(data.correct)) {
    errors.correct = "Only True or False";
  }

  if (Validator.isEmpty(data.correct)) {
    errors.correct = "Correct field is required";
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};