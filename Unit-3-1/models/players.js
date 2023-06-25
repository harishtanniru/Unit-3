var mongoose = require("mongoose");

var playersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Role: {
    type: String,
  },
  Hundreds: {
    type: Number,
  },
  Wickets: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Players = mongoose.model("Players", playersSchema);
module.exports = Players;
