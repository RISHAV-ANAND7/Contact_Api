import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import contactRouter from "./routes/contactRouter.js";
import { config } from "dotenv";

const app = express();
app.use(express.json());
//.env setup
config({ path: ".env" });

app.use("/api/user", userRouter);
app.use("/api/contact", contactRouter);

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => console.log("http://localhost:3000"));
