const express = require("express");
const {
  getProgress,
  updateProgress,
} = require("../controllers/progressController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// جلب التقدم لجميع البطاقات لمستخدم معين
router.get("/", authMiddleware, getProgress);

// تحديث التقدم لبطاقة معينة
router.put("/:flashcardId", authMiddleware, updateProgress);

module.exports = router;
