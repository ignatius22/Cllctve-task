const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String, require: true },
});

const project = mongoose.model("Project", projectSchema);
module.exports = project;
