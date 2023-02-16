const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");

connectDB;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/schools", require("./routes/schoolRoute"));
app.use("/api/devices", require("./routes/devices"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
