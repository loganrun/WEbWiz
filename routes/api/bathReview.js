const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const BathReview = require("../../models/BathReviews");
const Bathroom = require("../../models/Bathroom");
//const RateReview = require("../../middleware/RateReview")

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

    const { review, userId, bathroomId,userName, rating } = req.body;

    try {
      const restroom = await Bathroom.findOne({_id:bathroomId});

      if(!restroom){
        return res
          .status(400)
          .json({ errors: [{ msg: "Restroom does not exists" }] });
      }
      RateReview(restroom, rating);

      bathReview = new BathReview({
        review,
        bathroomId,
        userId,
        userName, rating
      });

      await bathReview.save();

      return res.json(bathReview);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

const RateReview = (restroom, rating) =>{
  console.log(restroom)
  console.log(rating)

  router.patch('/', async (req,res) =>{

    const newRating =  restroom.rating + rating;
    console.log(newRating)
    const newCount = restroom.count + 1;
    console.log(newCount)
  })

}

module.exports = router;
