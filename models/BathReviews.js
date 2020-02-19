const mongoose = require("mongoose");
const BathReviewsSchema = new mongoose.Schema({
  bathroomId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "bathroom"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  review: {
    type: String
  },
  score: {
    type: Number
  },
  profile_Name: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BathReviews = mongoose.model("bathreview", BathReviewsSchema);
