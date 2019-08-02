const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true
  }
});

module.exports = Users = mongoose.model("users", UserSchema);
