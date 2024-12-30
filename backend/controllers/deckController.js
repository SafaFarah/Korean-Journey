const Deck = require("../models/Deck");

// جلب جميع المجموعات
const getDecks = async (req, res) => {
  try {
    const decks = await Deck.find({ userId: req.user.userId }); // جلب المجموعات الخاصة بالمستخدم
    res.status(200).json(decks);
  } catch (error) {
    console.error("Error fetching decks:", error);
    res.status(500).json({ error: "Error fetching decks", details: error.message });
  }
};

// إنشاء مجموعة جديدة
const createDeck = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newDeck = new Deck({
      name,
      description,
      userId: req.user.userId, // ربط المجموعة بالمستخدم
    });

    await newDeck.save();
    res.status(201).json({ message: "Deck created successfully", deck: newDeck });
  } catch (error) {
    console.error("Error creating deck:", error);
    res.status(500).json({ error: "Error creating deck", details: error.message });
  }
};

// تحديث مجموعة موجودة
const updateDeck = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedDeck = await Deck.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      { name, description },
      { new: true }
    );

    if (!updatedDeck) {
      return res.status(404).json({ error: "Deck not found or not authorized" });
    }

    res.status(200).json({ message: "Deck updated successfully", deck: updatedDeck });
  } catch (error) {
    console.error("Error updating deck:", error);
    res.status(500).json({ error: "Error updating deck", details: error.message });
  }
};

// حذف مجموعة
const deleteDeck = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDeck = await Deck.findOneAndDelete({ _id: id, userId: req.user.userId });

    if (!deletedDeck) {
      return res.status(404).json({ error: "Deck not found or not authorized" });
    }

    res.status(200).json({ message: "Deck deleted successfully" });
  } catch (error) {
    console.error("Error deleting deck:", error);
    res.status(500).json({ error: "Error deleting deck", details: error.message });
  }
};

module.exports = { getDecks, createDeck, updateDeck, deleteDeck };
