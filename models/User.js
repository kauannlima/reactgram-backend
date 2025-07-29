const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  { timestamps: true }
);

const User = mongoose.model("Use", userSchema);

module.exports = User;
