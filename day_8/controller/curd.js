import dbConnect from "../config/db.js";
import User from "../models/user.js";

dbConnect();


export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message
    });
  }
};


export const findUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message
    });
  }
};


export const changePass = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { email: req.params.email },
      { $set: req.body }
    );

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Update error",
      error: error.message
    });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      email: req.params.email
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete error",
      error: error.message
    });
  }
};