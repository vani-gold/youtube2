const mongoose = require("mongoose");
const youTubeHeaderOneSchema = new mongoose.Schema({
  homeTitle: {
    type: String,
    default: 'Unlimited Movies TV Shows and More.',
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeHeaderOne", youTubeHeaderOneSchema);