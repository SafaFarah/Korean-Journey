const getFlashcards = (req, res) => {
  res.send("Fetching all flashcards");
};

const createFlashcard = (req, res) => {
  res.send("Creating a new flashcard");
};

const updateFlashcard = (req, res) => {
  res.send(`Updating flashcard with ID: ${req.params.id}`);
};

const deleteFlashcard = (req, res) => {
  res.send(`Deleting flashcard with ID: ${req.params.id}`);
};

module.exports = { getFlashcards, createFlashcard, updateFlashcard, deleteFlashcard };
