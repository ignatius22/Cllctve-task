const router = require("express").Router();

const userController = require("../controller/user");

const projectController = require("../controller/project");

const commentController = require("../controller/comment");

router.post("/register_user", userController.create_user);

router.post("/create_project", projectController.create_project);

router.get("/projects", projectController.get_projects);

router.get("/projects/:id", projectController.get_project);

router.post("/create_comment", commentController.create_comment);

router.get("/all_comment", commentController.all_comment);

router.get("/user_comment/:id", commentController.user_comment);

router.get("/single_comment/:id", commentController.single_comment);

router.get("/project_comment/:id", commentController.project_comment);

module.exports = router;
