import bcrypt from "bcrypt";
import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const saltRounds = 10;
  const hashedpassword = await bcrypt.hash(password, saltRounds);

  let user = await User.create({ name, email, password: hashedpassword });
  res.json({ message: "User Registered Successfully", Success: true, user });
};

//login controller

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User does not exist" });

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch)
    res.status(400).json({ error: "Invalid Credentials", success: false });

  const token = jwt.sign({ user_Id: user._id }, "process.env.JWT", {
    expiresIn: "1d",
  });

  res.json({ message: "User Logged in Successfully", token, Success: true });
};
