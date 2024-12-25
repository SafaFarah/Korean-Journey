const express = require("express");
const {
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/flashcardController");

const router = express.Router();

// جلب جميع البطاقات
router.get("/", getFlashcards);

// إنشاء بطاقة جديدة
router.post("/", createFlashcard);

// تحديث بطاقة موجودة
router.put("/:id", updateFlashcard);

// حذف بطاقة
router.delete("/:id", deleteFlashcard);

module.exports = router;
