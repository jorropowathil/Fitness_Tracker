// Required
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// View
app.use(express.static("public"));


// Mongoosedb Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// Uncomment after apiRoutes finished
// app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/homeRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});