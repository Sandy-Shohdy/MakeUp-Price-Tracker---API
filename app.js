const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/makeup-tracker")
  .then(() => console.log("MongoDB connected with Mongoose"))
  .catch((err) => console.error(err));

app.use(express.json()); // allows JSON body in POST

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Makeup Price Tracker API is running");
});
