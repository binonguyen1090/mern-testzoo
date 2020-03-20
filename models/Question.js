const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  form: {
    type: Schema.Types.ObjectId,
    ref: "Form",
    required: true
  },
  text: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true,
    enum: [1,2,3]
  },
  points: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Questions = mongoose.model("Question", QuestionSchema);
