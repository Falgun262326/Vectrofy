const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(trimmedPassword, salt);

    const user = new User({
      email: trimmedEmail,
      username: trimmedUsername,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ message: "Sign Up Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ username: trimmedUsername });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please Sign Up First" });
    }

    const isPasswordCorrect = await user.comparePassword(trimmedPassword);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const { password: _, ...others } = user._doc;

    res.status(200).json({ user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
