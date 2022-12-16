const mongoose = require("mongoose");
const footerTaskSchema = new mongoose.Schema({
  content2: {
    type: String,
    required: false,
  },
  cards2: {
    type: String,
    required: false,
  },
  footer2: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("FooterTask", footerTaskSchema);
