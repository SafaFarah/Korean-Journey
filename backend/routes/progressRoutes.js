const express = require("express");
const { updateProgress, getProgress } = require("../controllers/progressController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Route to update progress with a card (PUT)
router.put("/update", protect, updateProgress);

// Route to get the user's progress (GET)
router.get("/", protect, getProgress);

module.exports = router;
