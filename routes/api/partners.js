const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");
//const config = require("config");
//const jwt = require("jsonwebtoken");
const Partner = require("../../models/Partners");

router.post(
  "/",
  [
    check("lastName", "Please enter your last name")
      .not()
      .isEmpty(),
    check("firstName", "Please enter your first name")
      .not()
      .isEmpty(),
    check("businessName", "Please enter the name of your business")
      .not()
      .isEmpty(),
    check("street", "Address is required")
      .not()
      .isEmpty(),
    check("city", "Name of City is required")
      .not()
      .isEmpty(),
    check("state", "Name of State is required")
      .not()
      .isEmpty(),
    check("email", "Please provide a valid email address").isEmail(),
    check("userId", "Please login").isLength({
      min: 6
    }),
    check("phone", "Please provide a phone number")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      lastName,
      firstName,
      businessName,
      userId,
      email,
      phone,
      street,
      city,
      state,
      zipcode
    } = req.body;

    try {
      let partner = await Partner.findOne({ email });
      if (partner) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Business Already Registered" }] });
      }
      partner = new Partner({
        firstName,
        lastName,
        userId,
        email,
        businessName,
        phone,
        address: {
          street: street,
          city: city,
          state: state,
          zipcode: zipcode
        }
      });

      // const salt = await bcrypt.genSalt(10);
      // user.password = await bcrypt.hash(password, salt);

      await partner.save();

      // const payload = {
      //   user: {
      //     id: user.id
      //   }
      // };

      // jwt.sign(
      //   payload,
      //   config.get("jwtSecret"),
      //   { expiresIn: 360000 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
