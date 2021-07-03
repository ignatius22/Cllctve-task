const ProjectService = require("../services/projectService");

exports.create_project = async (req, res) => {
  let projectService = new ProjectService();
  let projectData = req.body;
  try {
    let project = await projectService.createProject(projectData);
    res
      .status(200)
      .json({ success: true, project, message: "Project creation successful" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.get_projects = async (req, res) => {
  let projectService = new ProjectService();
  try {
    let projects = await projectService.allProject();
    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.get_project = async (req, res) => {
  let projectService = new ProjectService();
  let _id = req.params.id;
  try {
    let projects = await projectService.singleProject(_id);
    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
