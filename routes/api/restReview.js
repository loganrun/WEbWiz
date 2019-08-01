const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const RestReview = require("../../models/RestReviews");

router.post(
  "/",
  [
    check("review", "Add your review")
      .not()
      .isEmpty(),
    check("rating", "Please add you rating")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { review, rating, userId, restaurantId } = req.body;

    try {
      restreview = new RestReview({
        review,
        rating,
        restaurantId
      });

      await restreview.save();

      return res.json(restreview);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
