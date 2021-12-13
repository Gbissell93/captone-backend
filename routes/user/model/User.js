const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    coinList: [{ type: mongoose.Schema.ObjectId, ref: "coinList" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
