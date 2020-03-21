const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
  correct: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = Answers = mongoose.model("Answer", AnswerSchema);
