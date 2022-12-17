const mongoose = require("mongoose");
const youTubeSubTitleSchema = new mongoose.Schema({
    homeSubTitle1: {
        type: String,
        default: 'Watch anywhere and cancel anytime.',
        required: false,
      },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeSubTitle", youTubeSubTitleSchema);