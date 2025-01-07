const express = require("express");
const { getCardsByGroup } = require("../controllers/CardController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route to get cards by group, with authentication
router.get('/:group', authMiddleware, getCardsByGroup);

module.exports = router;
