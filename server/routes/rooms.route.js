const express = require("express");
const router = express.Router();

// room MODEL
let Room = require("../models/Room");
let User = require("../models/User");

// ROUTES
router
  .route("/")
  .post(async (req, res, next) => {
    let { name, admins, members = [] } = req.body;
    if (!name || !admins)
      return res.status(400).send("Please enter all fields");

    let room = await Room.findOne({ name });
    if (room)
      return res.status(400).send("A room with that name already exists");
    Room.create({ name, admins, members }, (error, room) => {
      if (error) return next(error);
      res.json(room);
    });
  })
  .get((req, res, next) => {
    Room.find((error, rooms) => {
      if (error) return next(error);
      else res.json(rooms);
    });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    Room.findById(req.params.id, (error, room) => {
      if (error) return next(error);
      else res.json(room);
    });
  })
  .put((req, res, next) => {
    Room.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, room) => {
      if (err) return next(err);
      else res.json(room);
    });
  })
  .delete((req, res, next) => {
    Room.findByIdAndRemove(req.params.id, (err, room) => {
      if (err) return next(err);
      else res.json(room);
    });
  });

router
  .route("/:id/members/:memberId")
  .post((req, res, next) => {
    Room.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { members: req.params.memberId } },
      (err, room) => {
        if (err) return next(err);
        else res.json(room);
      }
    );
  })
  .delete((req, res, next) => {
    Room.findByIdAndUpdate(
      req.params.id,
      { $pull: { members: req.params.memberId } },
      (err, room) => {
        if (err) return next(err);
        else res.json(room);
      }
    );
  });

router.route("/:id/members").get((req, res, next) => {
  Room.findById(req.params.id)
    .select("members")
    .populate("members")
    .exec((error, room) => {
      if (error) return next(error);
      res.json(room.members);
    });
});

module.exports = router;