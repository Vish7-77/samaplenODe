const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const newUser = await User.create({ email, password, username });
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.log("error while creating a user", error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const users = await User.find({ username: username });
    res.status(200).json({ users });
  } catch (error) {
    console.log("error while creating a user", error);
  }
};
