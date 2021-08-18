// Required
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// Port
const PORT = process.env.PORT || 3000;
// Routes (edit as needed)
// const routes = require("routes");
// const api = require("api")
// Middleware
const app = express();
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View
app.use(express.static("public"));

// Mongoosedb Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerDB", {
  useNewUrlParser: true,
});

// App.use routes (fix when routes established)
// app.use("/api", apiRoutes);
// app.use("");





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });