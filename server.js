// Required
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3001;

// Routes (edit as needed)
// const routes = require("routes");
// const api = require("api")

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// View
app.use(express.static("public"));

// // App.use routes (fix when routes established)
// app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/homeRoutes.js"));

// Mongoosedb Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});