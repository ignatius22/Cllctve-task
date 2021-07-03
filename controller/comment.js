const CommentService = require("../services/commentService");

/* A post route*/
exports.create_comment = async (req, res) => {
  let commentService = new CommentService();
  let projectData = req.body;
  try {
    let project = await commentService.createComment(projectData);
    res
      .status(200)
      .json({ success: true, project, message: "Comment created successful" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

/* A get route*/
exports.all_comment = async (req, res) => {
  let commentService = new CommentService();

  try {
    let comment = await commentService.allComment();
    res.status(200).json({ success: true, comment });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

/* A get route*/
exports.user_comment = async (req, res) => {
  let commentService = new CommentService();
  let _id = req.params.id;
  try {
    let project = await commentService.userComment(_id);
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

/* A get route*/
exports.project_comment = async (req, res) => {
  let commentService = new CommentService();
  let _id = req.params.id;
  try {
    let project = await commentService.projectComment(_id);
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

/* A get route*/
exports.single_comment = async (req, res) => {
  let _id = req.params.id;
  let commentService = new CommentService();
  try {
    let project = await commentService.singleComment(_id);
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
