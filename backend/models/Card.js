const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  frontImage: String,
  backImage: String,
  audio: String,
  group: String,
});

module.exports = mongoose.model("Card", CardSchema);
