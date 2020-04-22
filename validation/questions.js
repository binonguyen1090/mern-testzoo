const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateQuestionInput(data) {
  let errors = {};
  data.text = validText(data.text) ? data.text : "";
  if (!Validator.isLength(data.text, { min: 1, max: 100 })) {
    errors.text = "Text must be between 1 and 100 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  data.difficulty = data.difficulty ? data.difficulty : "";

  if (!["1","2","3"].includes(data.difficulty)) {
    errors.difficulty = "Difficulty must be between 1 and 3";
  }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Difficulty field is required";
  }
  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
