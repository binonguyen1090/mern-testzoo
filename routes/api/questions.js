const express = require("express");
const router = express.Router({mergeParams: true});

const mongoose = require("mongoose");
const passport = require("passport");

const Question = require("../../models/Question");
const validateQuestionInput = require("../../validation/questions");



// router.get(
//   "/forms/:form_id/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Form.find({ form: req.params.form_id })
//       .then(question => res.json(question))
//       .catch(err =>
//         res.status(404).json({ noformsfound: "No forms found from that user" })
//       );
//   }
// );


router.get(
  "/forms/:form_id/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.find({ form: req.params.form_id })
      .then(question => res.json(question))
      .catch(err => res.status(404).json({ noquestionfound: "No question found" }));
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.findById(req.params.id)
      .then(question => res.json(question))
      .catch(err =>
        res.status(404).json({ noQuestionfound: "No question found with that ID" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newQuestion = new Question({
      form: req.body.form,
      text: req.body.text,
      difficulty: req.body.difficulty,
      points: req.body.points
    });

    newQuestion.save().then(question => res.json(question));
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateQuestionInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    Question.findByIdAndUpdate(req.params.id, { $set: { text: req.body.text, difficulty: req.body.difficulty } }, { new: true }, (err, Question) => {
      if (err) return res.status(422).json({ updateFail: err });
      Question.save().then(Question => res.json(Question));
    })
  }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Question.findByIdAndRemove(req.params.id)
        .then(()=> res.json("question removed successfully"))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'No question found with that ID' })
        );
});


module.exports = router;
