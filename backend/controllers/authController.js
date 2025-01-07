const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

/**
 * Handles user registration (signup).
 * Creates a new user and stores it in the database after validation and password hashing.
 */
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists with the provided email.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the user's password before saving it.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance and save it to the database.
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate a token and set it in cookies.
    generateTokenAndSetCookie(newUser._id, res);

    // Respond with success and prompt the user to log in.
    res.status(201).json({
      message: "Account created successfully, please log in.",
    });
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Handles user login.
 * Authenticates the user and generates a token if credentials are correct.
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database.
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Verify the password.
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate a token and set it in cookies.
    generateTokenAndSetCookie(user._id, res);

    // Respond with the user's information.
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      favorites: user.favorites,
      progress: user.progress,
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Handles user logout.
 * Clears the token cookie to log the user out.
 */
const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); // Clear the cookie by setting it to expire immediately.
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
