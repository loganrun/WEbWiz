const mongoose = require("mongoose");
const PartnersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String
  },
  businessName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = Partners = mongoose.model("partners", PartnersSchema);
