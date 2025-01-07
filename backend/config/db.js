const mongoose = require("mongoose");

/**
 * Establish a connection to the MongoDB database.
 * The connection details are specified in the environment variable MONGO_URI.
*/
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
