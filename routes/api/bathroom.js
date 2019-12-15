const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Bathroom = require("../../models/Bathroom");

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("street", "address is required")
      .not()
      .isEmpty(),
    check("city", "Name of City is required")
      .not()
      .isEmpty(),
    check("state", "Name of state is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, street, city, state, zipcode, directions,latitude,longitude,id,accessible,unisex } = req.body;

    try {
      bathroom = new Bathroom({
        name,
        address: {
          street: street,
          city: city,
          state: state,
          zipcode: zipcode
        },
        directions,
        latitude,
        longitude,
        id,
        accessible,
        unisex
      });

      await bathroom.save();

      return res.json(bathroom);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
  }
);

module.exports = router;
