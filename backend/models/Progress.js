const mongoose = require("mongoose");

// Define the progress schema
const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  flashcardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flashcard",
    required: true,
  },
  deckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Deck",
    required: true,
  },
  progress: {
    type: Number,
    default: 0, // Default progress percentage
    min: 0,
    max: 100,
  },
  lastReviewed: {
    type: Date,
    default: Date.now,
  },
});

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;
