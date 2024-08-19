require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MONGO_DB");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
