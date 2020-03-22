const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  form: {
    type: Schema.Types.ObjectId,
    ref: "Form",
    // required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  score: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

module.exports = Game = mongoose.model("Game", GameSchema);
