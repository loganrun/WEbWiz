const mongoose = require("mongoose");
const BathroomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  
  street: {
      type: String
  },
  city: {
      type: String
  },
  state: {
      type: String
  },
  directions: {
    type: String
  },
  latitude: {
    type: Number,
  },
  longitude:{
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  id:{
    type: String
  },
  changing_table:{
    type: Boolean
  },
  location:{
    type: {type: String},
    coordinates: []
  },
  accessible: {
    type: Boolean
  }, 
  unisex:{
    type: Boolean
  },
  paid:{
      type: Boolean
  }
});

module.exports = Bathroom = mongoose.model("bathroom", BathroomSchema);
