const express = require("express");
const {
  getFlashcards,
  getFlashcardById,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/flashcardController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// جلب جميع البطاقات
router.get("/", authMiddleware, getFlashcards);

// جلب بطاقة واحدة
router.get("/:id", authMiddleware, getFlashcardById);

// إنشاء بطاقة جديدة
router.post("/", authMiddleware, createFlashcard);

// تحديث بطاقة موجودة
router.put("/:id", authMiddleware, updateFlashcard);

// حذف بطاقة
router.delete("/:id", authMiddleware, deleteFlashcard);

module.exports = router;
