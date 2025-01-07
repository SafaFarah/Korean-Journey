const express = require("express");
const { toggleFavorite, getFavorites } = require("../controllers/favoritesController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Route to add/remove a card from favorites (POST)
router.post("/toggle", protect, toggleFavorite);

// Route to get the user's favorite cards (GET)
router.get("/", protect, getFavorites);

module.exports = router;
