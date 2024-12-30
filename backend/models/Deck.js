const mongoose = require("mongoose");

// Define the deck schema
const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true, // اسم المجموعة يجب أن يكون فريدًا
  },
  description: {
    type: String,
    trim: true,
    default: "No description provided", // وصف افتراضي في حالة عدم إدخال وصف
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // مرجع للمستخدم الذي أنشأ المجموعة
    required: true,
  },
  flashcards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flashcard", // مرجع للبطاقات المرتبطة بهذه المجموعة
  }],
  progress: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Progress",
  }],
  createdAt: {
    type: Date,
    default: Date.now, // تاريخ الإنشاء
  },
});

// Export the Deck model
const Deck = mongoose.model("Deck", deckSchema);
module.exports = Deck;
