import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { errorHandler } from "./middlewares/errorHandler.js";

import router from "./routers/index.js";
import adminPanelRouter from "./routers/adminRouter.js";
import { adminRouter } from "./admin_panel/admin-config.js";

dotenv.config();

const app = express();

mongoose.set("strictQuery", false);

app.use("/admin", adminRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// static files from public folder on the base URL
app.use(process.env.BASE_URL, express.static('public'))

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// app.use(process.env.BASE_URL, router)
app.use("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});
app.use("*",(req,res) => {
    // throw new Error("Route not found")
    console.log('Route not found')
    return res.status(404).json({message: "Route not found"})
});

app.use(errorHandler);

const PORT = process.env.PORT || 8011;

app.listen(PORT, () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => {
        console.log("Error connecting to MongoDB");
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on port ${PORT}`);
});
