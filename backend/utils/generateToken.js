const jwt = require("jsonwebtoken");

// Generates a JWT token and sets it in a cookie
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",  // The token expires in 15 days
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 15 * 24 * 60 * 60 * 1000,  // Token expiration time (15 days)
  });
};

module.exports = generateTokenAndSetCookie;
