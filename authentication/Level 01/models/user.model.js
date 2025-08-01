const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // optional but helpful to avoid duplicates
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

// 🔐 Encryption Key from .env
const encKey = process.env.ENC_KEY;

// ✅ Apply encryption plugin to schema
userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ["password"],
});

module.exports = mongoose.model("User", userSchema);
