const Progress = require("../models/Progress");

// جلب التقدم لجميع البطاقات لمستخدم معين
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.userId })
      .populate("flashcardId", "question answer")
      .populate("deckId", "name");

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: "Error fetching progress", details: error.message });
  }
};

// تحديث التقدم لبطاقة معينة
const updateProgress = async (req, res) => {
  try {
    const { flashcardId } = req.params;
    const { progress } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({ error: "Progress must be between 0 and 100" });
    }

    const updatedProgress = await Progress.findOneAndUpdate(
      { userId: req.userId, flashcardId },
      { progress, lastReviewed: Date.now() },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ error: "Error updating progress", details: error.message });
  }
};

module.exports = { getProgress, updateProgress };
