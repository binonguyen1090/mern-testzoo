const express = require("express");
const router = express.Router({mergeParams: true});

const mongoose = require("mongoose");
const passport = require("passport");

const Game = require("../../models/Game");


router.get(
  "/forms/:form_id/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Game.find({ form: req.params.form_id })
      .sort({ score: -1 })
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
      form: req.body.form,
      user: req.user.id
    });

    newGame.save().then(game => res.json(game));
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const updateGame = Game.findById(req.params.id, (game) => {
      game.text = req.body.score    
      game.save().then(game => res.json(game));
    })
  }
);


module.exports = router;