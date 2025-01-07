const Card = require("../models/Card");

/**
 * Fetches all cards belonging to a specific group.
 * @route GET /api/cards/:group
 * @param {string} req.params.group - The group identifier to filter cards.
 * @returns {Object[]} - A list of cards that belong to the specified group.
 */
const getCardsByGroup = async (req, res) => {
  try {
    const { group } = req.params;

    // Fetch cards from the database that match the given group.
    const cards = await Card.find({ group });

    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error.message);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCardsByGroup };
