import jwt from "jsonwebtoken";
import { User } from "..//Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Authorization");

  //console.log("checking token:- ", token);

  if (!token) return res.json({ message: "login first" });

  const decoded = jwt.verify(token, "process.env.JWT");

  const id = decoded.userId || decoded.user_Id;

  let user = await User.findById(id);

  if (!user) return res.json({ message: "user not found!!!" });

  req.user = user;
  next();
};
