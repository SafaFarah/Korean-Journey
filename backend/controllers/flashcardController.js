const Flashcard = require("../models/Flashcard"); // افتراض وجود موديل Flashcard

// جلب جميع البطاقات الخاصة بالمستخدم
const getFlashcards = async (req, res) => {
  try {
    const userId = req.user.id; // جلب معرف المستخدم من التوكين
    const flashcards = await Flashcard.find({ user: userId });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flashcards" });
  }
};

// جلب بطاقة واحدة حسب المعرف
const getFlashcardById = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard || flashcard.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flashcard" });
  }
};

// إنشاء بطاقة جديدة
const createFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFlashcard = new Flashcard({
      question,
      answer,
      user: req.user.id, // ربط البطاقة بالمستخدم
    });
    const savedFlashcard = await newFlashcard.save();
    res.status(201).json(savedFlashcard);
  } catch (error) {
    res.status(500).json({ message: "Error creating flashcard" });
  }
};

// تحديث بطاقة موجودة
const updateFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const flashcard = await Flashcard.findById(req.params.id);

    if (!flashcard || flashcard.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    flashcard.question = question || flashcard.question;
    flashcard.answer = answer || flashcard.answer;

    const updatedFlashcard = await flashcard.save();
    res.json(updatedFlashcard);
  } catch (error) {
    res.status(500).json({ message: "Error updating flashcard" });
  }
};

// حذف بطاقة
const deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);

    if (!flashcard || flashcard.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    await flashcard.remove();
    res.json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting flashcard" });
  }
};

module.exports = {
  getFlashcards,
  getFlashcardById,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
