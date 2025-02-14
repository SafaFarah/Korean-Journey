const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Card = require("./models/Card");
const cardsData = require("./cards.json");

dotenv.config();

const uploadCards = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await Card.deleteMany({});
    console.log("Old cards removed");

    await Card.insertMany(cardsData);
    console.log("New cards uploaded successfully");

    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error uploading cards:", err);
    mongoose.disconnect();
  }
};

uploadCards();
