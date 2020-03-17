const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Form = require('../../models/Form');
const validateFormInput = require('../../validation/forms');

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

module.exports = router;