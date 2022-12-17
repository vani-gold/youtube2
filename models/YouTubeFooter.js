const mongoose = require("mongoose");
const youTubeFooterSchema = new mongoose.Schema({
    footer1: {
        type: String,
        default: 'FAQ',
        required: false,
      },
      footer2: {
        type: String,
        default: 'Help Centre',
        required: false,
      },
      footer3: {
        type: String,
        default: 'Account',
        required: false,
      },
      footer4: {
        type: String,
        default: 'Media Centre',
        required: false,
      },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeFooter", youTubeFooterSchema);