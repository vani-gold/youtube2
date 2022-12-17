const mongoose = require("mongoose");
const youTubeSubTitleSchema = new mongoose.Schema({
  subTitle: {
    type: String,
    default: 'Watch anywhere and cancel anytime Ready to watch? Enter your email to create or restart your membership.',
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeSubTitle", youTubeSubTitleSchema);