const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find()
      .sort({ date: -1 })
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: "No uesrs found" }));
  }
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err =>
        res.status(404).json({ noformfound: "No form found with that ID" })
      );
  }
);

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email}).then(user => {
      if (user){
          return res.status(400).json({email: "A user has already registered with this address"})
      } else {
          const newUser = new User({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password
          })
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                      const payload = { id: user.id, username: user.username };

                      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                          res.json({
                          success: true,
                          token: "Bearer " + token
                          });
                      });
                  })
                  .catch(err => null);
              })
          })

          // newUser.save().then(user => res.send(user)).catch(err => res.send(err))
      }
  })
})

router.put("/:id/follow", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const followUser = User.findByIdAndUpdate(req.params.user_id, (err, user) => {
      if (user.following.includes(req.body.follow_id)) {
        return res.status(400).json({follower: 'already following user'});
      }
      user.following = user.following.push(req.body.follow_id)
      user.save().then(User => res.json(User));
    })
  }
)


router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
              const payload = {id: user.id, username: user.username};
              jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
          } else {
            return res.status(400).json({password: 'Incorrect password'});
          }
        })
    })
  })

module.exports = router;
