const express = require("express");
const router = express.Router({mergeParams: true});

const mongoose = require("mongoose");
const passport = require("passport");

const Answer = require("../../models/Answer");
const validateAnswerInput = require("../../validation/answers");

router.get(
  "/questions/:question_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Answer.find({ question: req.params.question_id })
      .then(answer => res.json(answer))
      .catch(err =>
        res.status(404).json({ noquestionfound: "No answer found" })
      );
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.findById(req.params.id)
      .then(Question => res.json(Question))
      .catch(err =>
        res.status(404).json({ noQuestionfound: "No question found with that ID" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAnswerInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newAnswer = new Answer({
      question: req.body.question,
      body: req.body.body,
      correct: req.body.correct
    });

    newAnswer.save().then(answer => res.json(answer));
  }
);

router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { errors, isValid } = validateAnswerInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
      Answer.findByIdAndUpdate(req.params.id, {$set: {correct: req.body.correct, body: req.body.body}}, {new: true}, (err, Answer) => {
        if (err) return res.status(422).json({ updateFail: err });
        Answer.save().then(Answer => res.json(Answer));
      })
    }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Answer.findByIdAndRemove(req.params.id)
        .then(()=> res.json("answer removed successfully"))
        .catch(err =>
            res.status(404).json({ noanswerfound: 'No answer found with that ID' })
        );
});


module.exports = router;