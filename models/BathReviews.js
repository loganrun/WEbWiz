const mongoose = require("mongoose");
const BathReviewsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  review: {
    type: String,
    required: true
  },
  bathroomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bathroom"
  },
  rating: {
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
