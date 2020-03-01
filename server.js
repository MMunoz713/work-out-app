const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// routes
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/stats", (req, res) => {
  res.sendFile(__dirname + "/public/stats.js")
});

app.get("/exercise", (req, res) => {
  res.sendFile(__dirname + "public/exercise.html")
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
