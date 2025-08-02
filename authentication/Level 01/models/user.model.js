const mongoose = require("mongoose");
require("dotenv").config();


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});











module.exports = mongoose.model("User", userSchema);
