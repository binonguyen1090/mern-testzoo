const express = require("express");
const router = express.Router({mergeParams: true});

const mongoose = require("mongoose");
const passport = require("passport");

const Game = require("../../models/Game");
const validateQuestionInput = require("../../validation/questions");


router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Game.find()
      .sort({ date: -1 })
      .then(Game => res.json(Game))
      .catch(err => res.status(404).json({ noGamefound: "Never taken this test before" }));
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Game.findById(req.params.id)
      .then(Game => res.json(Game))
      .catch(err =>
        res.status(404).json({ noGamefound: "This test was never taken" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const newGame = new Game({
      user: req.user.id
    });

    newGame.save().then(game => res.json(game));
  }
);


// router.delete('/:id', passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//     Game.findByIdAndRemove(req.params.id)
//         .then(()=> res.json("game removed successfully"))
//         .catch(err =>
//             res.status(404).json({ nogamefound: 'No game found with that ID' })
//         );
// });


module.exports = router;