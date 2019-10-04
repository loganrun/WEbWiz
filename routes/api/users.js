const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");
//const config = require("config");
//const jwt = require("jsonwebtoken");
const User = require("../../models/Users");

router.post(
  "/",
  [
    check("lastName", "Please enter your last name")
      .not()
      .isEmpty(),
    check("firstName", "Please enter your first name")
      .not()
      .isEmpty(),
    check("email", "Please provide a valid email address").isEmail(),
    check("userId", "Password must be at least 6 characters").isLength({
      min: 6
    }),
    check("userName", "Please provide a phone number")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { lastName, firstName, userName, password, email, userId } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      user = new User({
        firstName,
        lastName,
        password,
        email,
        userName,
        userId
      });

      //   const salt = await bcrypt.genSalt(10);
      //   user.password = await bcrypt.hash(password, salt);

      await user.save();

      //   const payload = {
      //     user: {
      //       id: user.id
      //     }
      //   };

      //   jwt.sign(
      //     payload,
      //     config.get("jwtSecret"),
      //     { expiresIn: 360000 },
      //     (err, token) => {
      //       if (err) throw err;
      //       res.json({ token });
      //     }
      //   );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
