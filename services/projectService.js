const Project = require("../models/project");

function ProjectService() {}

ProjectService.prototype.createProject = async function (ProjectObj) {
  const { name } = ProjectObj;
  if (name == undefined) throw "name is not defined";

  const project = await Project.findOne({ name });
  if (project !== null) throw "project name already taken";
  const newProject = new Project({
    name,
  });

  let savedProject = await newProject.save();
  return savedProject;
};

ProjectService.prototype.allProject = async function () {
  const projects = await Project.find({});
  return projects;
};

ProjectService.prototype.singleProject = async function (_id) {
  const project = await Project.findOne({ _id });
  return project;
};

module.exports = ProjectService;


