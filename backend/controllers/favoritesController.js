const User = require("../models/User");

/**
 * Toggles a card in the user's favorites.
 * Adds the card to favorites if not already present, or removes it if it is.
 * @param {Object} req - Express request object, containing user ID and card ID.
 * @param {Object} res - Express response object.
 */
const toggleFavorite = async (req, res) => {
  try {
    const userId = req.user._id; // Authenticated user's ID
    const { cardId } = req.body; // ID of the card to toggle

    if (!cardId) {
      return res.status(400).json({ error: "Card ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the card is already in favorites
    const isFavorite = user.favorites.includes(cardId);

    if (!isFavorite) {
      // Add card to favorites
      user.favorites.push(cardId);
      await user.save();
      return res.status(200).json({ message: "Card added to favorites", isFavorite: true });
    } else {
      // Remove card from favorites
      user.favorites = user.favorites.filter((id) => id.toString() !== cardId);
      await user.save();
      return res.status(200).json({ message: "Card removed from favorites", isFavorite: false });
    }
  } catch (error) {
    console.error("Error in toggleFavorite:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Retrieves all cards in the user's favorites.
 * @param {Object} req - Express request object, containing user ID.
 * @param {Object} res - Express response object, returns an array of favorite cards.
 */
const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    res.status(200).json(user.favorites); // Return the populated list of favorites
  } catch (err) {
    console.error("Error in getFavorites:", err.message);
    res.status(500).json({ error: "Something went wrong while retrieving favorites" });
  }
};

module.exports = { toggleFavorite, getFavorites };
