import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "./Routes/index.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGODB = process.env.MONGODB_URI;

//  connect to database
mongoose
  .connect(MONGODB)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongodb error :", err));
// use the API
app.use(express.json());
app.use("/api", userRoutes);
// start express server
app.listen(8000, () => {
  console.log(`server is running on port ${PORT}`);
});