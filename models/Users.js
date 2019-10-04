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
  email: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  promotions: {
    type: String
  }
});

module.exports = Users = mongoose.model("users", UserSchema);
