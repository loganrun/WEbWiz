const mongoose = require("mongoose");
const BathroomSchema = new mongoose.Schema({
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
  directions: {
    type: String
  },
  coordinates: {
    latitude: Number,
    Longitude: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  id:{
    type: String
  },
  table:{
    type: Boolean
  }
});

module.exports = Bathroom = mongoose.model("bathroom", BathroomSchema);
