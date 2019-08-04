const mongoose = require("mongoose");
const RestReviewsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  review: {
    type: String,
    required: true
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurant"
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

module.exports = RestReviews = mongoose.model("restreview", RestReviewsSchema);
