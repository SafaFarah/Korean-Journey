const express = require("express");
const { getDecks, createDeck, updateDeck, deleteDeck } = require("../controllers/deckController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// جلب جميع المجموعات
router.get("/", authMiddleware, getDecks);

// إنشاء مجموعة جديدة
router.post("/", authMiddleware, createDeck);

// تحديث مجموعة موجودة
router.put("/:id", authMiddleware, updateDeck);

// حذف مجموعة
router.delete("/:id", authMiddleware, deleteDeck);

module.exports = router;
