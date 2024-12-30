const mongoose = require("mongoose");

// Define the flashcard schema
const flashcardSchema = new mongoose.Schema({
  deckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Deck",
    required: true,
  },
  word: {
    type: String,
    required: true,
    trim: true,
  },
  translation: {
    type: String,
    required: true,
    trim: true,
  },
  exampleSentence: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,  // هذا الحقل سيكون رابط الصورة من Cloudinary أو S3
    validate: {
      validator: function (v) {
        // تحقق من أن الرابط هو رابط صورة صحيح (مثال: Cloudinary أو S3)
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(v);
      },
      message: "Invalid image URL format.",
    },
  },
  progress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Progress",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Flashcard model
const Flashcard = mongoose.model("Flashcard", flashcardSchema);
module.exports = Flashcard;
