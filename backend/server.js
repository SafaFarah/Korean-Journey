const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const deckRoutes = require("./routes/deckRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

app.use("/api/auth", authRoutes);
app.use("/api/decks", authMiddleware, deckRoutes);
app.use("/api/flashcards", authMiddleware, flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
