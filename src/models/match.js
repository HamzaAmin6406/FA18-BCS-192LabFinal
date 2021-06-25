const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  teamA: {
    type: String,
    required: true,
  },
  teamB: {
    type: String,
    required: true,
  },
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;
