const Project = require("../models/projectModel");

//get all projects

//get a single project

//post a new project
const postProject = async (req, res) => {
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//delete a project

//update a project

module.exports = {
  postProject,
};