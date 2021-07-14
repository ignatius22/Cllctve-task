require("dotenv").config({ path: ".env" });

const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

const app = require("./index");
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

module.exports = server;
