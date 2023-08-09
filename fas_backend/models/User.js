const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Please feel free to change model by adding more fields, maybe adding more constraint
var userSchema = new mongoose.Schema({
  userUid: {
    type: String,
    default: uuidv4,
  },
  // firstName: String,
  // lastName: String,
  // address: String,
  // phoneNumber: String,
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  allergen: [],
});

var User = mongoose.model("User", userSchema);

module.exports = User;
