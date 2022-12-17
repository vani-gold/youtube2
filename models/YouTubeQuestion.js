const mongoose = require("mongoose");
const youTubeQuestionSchema = new mongoose.Schema({
  summary:{
    type: String,
    default: 'What is netflix?',
    required: false,
  },
  detail:{
    type: String,
    default: 'netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices',
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("YouTubeQuestion", youTubeQuestionSchema);
