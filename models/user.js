const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, require: true },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
