const express = require("express");
const router = express.Router({mergeParams: true});

const mongoose = require("mongoose");
const passport = require("passport");

const Question = require("../../models/Question");
const validateQuestionInput = require("../../validation/questions");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Question.find()
      .sort({ date: -1 })
      .then(question => res.json(question))
      .catch(err => res.status(404).json({ noquestionfound: "No question found" }));
  }
);

// router.get(
// //   "/form/:form_id",
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Question.find({ form: req.params.id })
//     //   .select('questions')
//       .then(questions => res.json(questions))
//       .catch(err =>
//         res.status(404).json({ noquestionsfound: "No questions in this form yet" })
//       );
//   }
// );


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
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newQuestion = new Question({
      // form: req.form.id,
      form: req.params.form_id,
      text: req.body.text,
      difficulty: req.body.difficulty
    });

    newQuestion.save().then(Question => res.json(Question));
  }
);

// router.patch(
//     "/form/:form_id/:id",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateQuestionInput(req.body);
  
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
  
//       const updateQuestion = Question.findById(req.params.id, (err, question) => {
//         question.text = req.body.text;
//         question.difficulty = req.body.difficulty;
//       })
      
//       updateQuestion.save().then(Question => res.json(Question));
//     }
// );

module.exports = router;
