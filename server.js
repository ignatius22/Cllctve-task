require("dotenv").config({ path: ".env" });

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE.toString(), {
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

const server = app.listen(3000, () => {
  console.log("server listening on port 3000");
});
