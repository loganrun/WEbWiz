const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const BathReview = require("../../models/BathReviews");

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

    const { review, rating, userId, bathroomId } = req.body;

    try {
      bathreview = new BathReview({
        review,
        rating,
        bathroomId,
        userId,
        
      });

      await bathreview.save();

      return res.json(bathreview);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
