const express = require("express");
const {
  signup,
  login,
  logout,
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Routes for signup, login, and logout
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

// Route to verify if the token is valid
router.route("/verify-token").get(protect, (req, res) => {
  res.status(200).json({ message: "Token is valid" });
});

module.exports = router;
