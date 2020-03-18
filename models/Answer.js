const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  correct: {
    type: Boolean,
    required: true,
    default: false
  },
  body: {
    type: String,
    required: true,
  }
  
});

module.exports = Answers = mongoose.model("Answer", AnswerSchema);
