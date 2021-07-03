const Comment = require("../models/comment");

function CommentService() {}

CommentService.prototype.createComment = async function (CommentObj) {
  const { user, project, content } = CommentObj;
  if (content == undefined) throw "content is not defined";
  if (content.length <= 5) throw "content should be more than or equals to 5";
  if (user == undefined) throw "user is not defined";
  if (project == undefined) throw "project is not defined";

  const newComment = new Comment({
    user,
    project,
    content,
  });

  let savedComment = await newComment.save();
  return savedComment;
};

CommentService.prototype.allComment = async function () {
  const comments = await Comment.find({}).populate("project");
  return comments;
};

CommentService.prototype.projectComment = async function (project_id) {
  const comments = await Comment.find({ project: project_id }).populate(
    "user project"
  );
  return comments;
};

CommentService.prototype.userComment = async function (id) {
  const comments = await Comment.find({ user: id });
  return comments;
};

CommentService.prototype.singleComment = async function (_id) {
  const comment = await Comment.findOne({ _id });
  return comment;
};

module.exports = CommentService;
