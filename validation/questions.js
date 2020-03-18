const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateQuestionInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 3, max: 30 })) {
    errors.text = "Text must be between 5 and 100 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  data.difficulty = validText(data.difficulty) ? data.difficulty : "";

  if (!Validator.isLength(data.difficulty, { min: 1, max: 3 })) {
    errors.difficulty = "Difficulty must be between 1 and 3 characters";
  }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Difficulty field is required";
  }
  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
