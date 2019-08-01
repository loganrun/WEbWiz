const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  cuisineType: {
    type: String
  },
  operationHours: {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String
  }
});

module.exports = Restaurant = mongoose.model("restaurants", RestaurantSchema);
