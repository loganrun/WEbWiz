const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Restaurant = require("../../models/Restaurant");

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

    const {
      name,
      street,
      city,
      state,
      zipcode,
      cuisineType,
      latitude,
      longitude,
      Monday,
      Tuesday,
      Thursday,
      Wednesday,
      Friday,
      Saturday,
      Sunday
    } = req.body;

    try {
      restaurant = new Restaurant({
        name,
        address: {
          street: street,
          city: city,
          state: state,
          zipcode: zipcode
        },
        coordinates: {
          latitude: latitude,
          longitude: longitude
        },
        cuisineType,
        operationHours: {
          Monday: Monday,
          Tuesday: Tuesday,
          Wednesday: Wednesday,
          Thursday: Thursday,
          Friday: Friday,
          Saturday: Saturday,
          Sunday: Sunday
        }
      });

      await restaurant.save();

      return res.json(restaurant);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
