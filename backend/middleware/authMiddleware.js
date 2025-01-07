const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes by verifying the JWT
const protect = async (req, res, next) => {
  let token;

  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt; // Extract token from cookies
  }

  if (!token) {
    return res.status(401).json({ error: "Not authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode and verify the JWT
    req.user = await User.findById(decoded.userId).select("-password"); // Attach user to the request without the password
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error.message);
    res.status(401).json({ error: "Not authorized" });
  }
};

module.exports = protect;
