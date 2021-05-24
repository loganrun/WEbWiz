const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const BathReview = require("../../models/BathReviews");
const Bathroom = require("../../models/Bathroom");
const Users = require("../../models/Users")

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

    const { review, bathroomId,userName, rating } = req.body;

    try {
      const restroom = await Bathroom.findOne({_id:bathroomId});
      const user = await Users.findOne({userId:req.body.userId});
      

      if(!restroom){
        return res
          .status(400)
          .json({ errors: [{ msg: "Restroom does not exists" }] });
      }if(!user){
        return res
        .status(400)
        .json({ errors: [{ msg: "You must be signed in to leave a review" }] })
      }
      
      let userId = user._id;
      const newCount = restroom.count + 1;
      const newRating= restroom.totalRatings + rating;
      const newAvg =  newRating/ newCount;
      //const newAvg = Math.round(interAvg);

      try{

        const bathroomCount= await Bathroom.findByIdAndUpdate({_id: restroom._id}, {"count": newCount}, {new:true})
        console.log(bathroomCount.count)

      }catch(err){
        console.error(err.message);
        res.status(500).send("server error");

      };

      try{
      
        const bathRatingUpdate= await Bathroom.findByIdAndUpdate({_id: restroom._id}, {"rating": newAvg}, {new:true})
        console.log(bathRatingUpdate.rating)

      }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
      }

      try{
      
        const totalRatingUpdate= await Bathroom.findByIdAndUpdate({_id: restroom._id}, {"totalRatings": newRating }, {new:true})
        console.log(totalRatingUpdate.rating)

      }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
      }

      try{
        const newUserCount = user.count + 1;

        const userUpdateCount= await Users.findByIdAndUpdate({_id: userId}, {"count": newUserCount}, {new:true})
        console.log(userUpdateCount.count)

      }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
      };

      


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



module.exports = router;
