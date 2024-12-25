const express = require("express");
const { getDecks, createDeck, updateDeck, deleteDeck } = require("../controllers/deckController");

const router = express.Router();

// جلب جميع المجموعات
router.get("/", getDecks);

// إنشاء مجموعة جديدة
router.post("/", createDeck);

// تحديث مجموعة موجودة
router.put("/:id", updateDeck);

// حذف مجموعة
router.delete("/:id", deleteDeck);

module.exports = router;
