const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/keys");
const auth = require("../middleware/auth");

// USER MODEL
let User = require("../models/User");

/* ROUTES */

/* PATH: POST /api/auth/ | DESC: check user credentials and return token if valid | PUBLIC */
router.route("/").post((req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) res.status(400).send("");

  // Check if user exists
  User.findOne({ email }).then((user) => {
    if (!user) res.status(400).send("ERROR: User does not exist");

    // Validate Password and send back token if valid
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) res.status(400).send("ERROR: Invalid credentials");

      jwt.sign(
        { id: user._id },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.send({ token, user });
        }
      );
    });
  });
});

/* PATH: GET /api/auth/user | DESC: get user from token (passed in header) | PRIVATE */
router.get("/user", auth, (req, res, next) => {
  User.findById(req.user.id)
    .select("-password") // Send user excluding password
    .then((user) => res.send(user));
});

module.exports = router;
