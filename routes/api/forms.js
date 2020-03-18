const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Form = require('../../models/Form');
const validateFormInput = require('../../validation/forms');

const questions = require('./questions');
router.use('/:id/questions', questions)

const game = require('./games');
router.use('/:id/games', game)

router.get('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Form.find()
        .sort({ date: -1 })
        .then(forms => res.json(forms))
        .catch(err => res.status(404).json({ noformsfound: 'No forms found' }));
});

router.get('/user/:user_id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Form.find({user: req.params.user_id})
        .then(forms => res.json(forms))
        .catch(err =>
            res.status(404).json({ noformsfound: 'No forms found from that user' }
        )
    );
});

router.get('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Form.findById(req.params.id)
        .then(form => res.json(form))
        .catch(err =>
            res.status(404).json({ noformfound: 'No form found with that ID' })
        );
});

router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateFormInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newForm = new Form({
        user: req.user.id,
        title: req.body.title,
        category: req.body.category
      })
  
      newForm.save().then(form => res.json(form))
    }
);

router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { errors, isValid } = validateFormInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      Form.findById(req.params.id, (err, form) => {
        form.title = req.body.title;
        form.category = req.body.category;
        form.save().then(Form => res.json(Form));
      })
    }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Form.findByIdAndRemove(req.params.id)
        .then(()=> res.json("form removed successfully"))
        .catch(err =>
            res.status(404).json({ noformfound: 'No form found with that ID' })
        );
});

// Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
//   // As always, handle any potential errors:
//   if (err) return res.status(500).send(err);
//   // We'll create a simple object to send back with a message and the id of the document that was removed
//   // You can really do this however you want, though.
//   const response = {
//     message: "Todo successfully deleted",
//     id: todo._id
//   };
//   return res.status(200).send(response);
// });
module.exports = router;