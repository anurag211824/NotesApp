import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

//signUp logic
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const isValidUser = await User.findOne({ email });
  if (isValidUser) {
    return next(errorHandler(400, "User already exits"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

//signin Logic
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(404, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      success: true,
      message: "Login Successfull",
      rest,
    });
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");

    res.status(200).json({
      success: true,
      message: "User logged out successfully"
    });
  } catch (error) {
    next(error);
  }
};
