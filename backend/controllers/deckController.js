const getDecks = (req, res) => {
  res.send("Fetching all decks");
};

const createDeck = (req, res) => {
  res.send("Creating a new deck");
};

const updateDeck = (req, res) => {
  res.send(`Updating deck with ID: ${req.params.id}`);
};

const deleteDeck = (req, res) => {
  res.send(`Deleting deck with ID: ${req.params.id}`);
};

module.exports = { getDecks, createDeck, updateDeck, deleteDeck };
