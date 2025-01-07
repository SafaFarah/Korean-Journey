const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const cardsRoutes = require("./routes/CardRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const progressRoutes = require("./routes/progressRoutes");

dotenv.config();

const app = express();

// CORS configuration to allow requests from specific origins
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true, // Allow sending cookies with requests
};
app.use(cors(corsOptions));

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB connection setup
mongoose
  .connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

// Registering API routes
app.use("/api/auth", authRoutes);
app.use("/api/cards", cardsRoutes); 
app.use("/api/favorites", favoritesRoutes);
app.use("/api/progress", progressRoutes);

// Simple landing page route for status check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.message);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
);
