const mongoose = require("mongoose");
const youTubeSectionSubSchema = new mongoose.Schema({
    homeSubTitle2: {
        type: String,
        default: 'Ready to watch? Enter your email to create or restart your membership.',
        required: false,
      },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeSectionSub", youTubeSectionSubSchema);