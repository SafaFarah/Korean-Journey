const express = require("express");
const { signup, login, authenticate } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/authenticate", authMiddleware, authenticate);

module.exports = router;
