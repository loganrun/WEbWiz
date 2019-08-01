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
  }
});

module.exports = Bathroom = mongoose.model("bathroom", BathroomSchema);
