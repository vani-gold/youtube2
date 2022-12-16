const mongoose = require("mongoose");
const questionDetailsSchema = new mongoose.Schema({
  questionn: {
    type: String,
    required: false,
  },
  detail: {
    type: String,
    required: false,
  },
  body:[{
    title: String,
    subtitle:String,
    para:String,
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Question", questionDetailsSchema);
