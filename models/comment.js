const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    require: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;
