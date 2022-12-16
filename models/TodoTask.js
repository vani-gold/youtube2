const mongoose = require("mongoose");
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: false,
  },
  cards: {
    type: String,
    required: false,
  },
  footer: {
    type: String,
    required: false,
  },
  button: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("TodoTask", todoTaskSchema);
