const User = require("../models/User");

/**
 * Updates the user's progress by adding a card to their progress list if not already present.
 * @param {Object} req - Express request object, containing user ID and card ID.
 * @param {Object} res - Express response object.
 */
const updateProgress = async (req, res) => {
  try {
    const { cardId } = req.body; // ID of the card being viewed
    const user = await User.findById(req.user._id);

    // Check if the card is already in the progress list
    if (!user.progress.includes(cardId)) {
      user.progress.push(cardId);
      await user.save();
      return res.status(200).json({ message: "Progress updated" });
    }

    // If the card is already in progress
    res.status(200).json({ message: "Card already in progress" });
  } catch (err) {
    console.error("Error in updateProgress:", err.message);
    res.status(500).json({ error: "Something went wrong while updating progress" });
  }
};

/**
 * Retrieves the user's progress (list of cards they have viewed).
 * @param {Object} req - Express request object, containing user ID.
 * @param {Object} res - Express response object, returns an array of progress cards.
 */
const getProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("progress");
    res.status(200).json(user.progress);
  } catch (err) {
    console.error("Error in getProgress:", err.message);
    res.status(500).json({ error: "Something went wrong while retrieving progress" });
  }
};

module.exports = { updateProgress, getProgress };
