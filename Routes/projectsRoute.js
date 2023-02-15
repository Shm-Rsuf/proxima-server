const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

//router
const router = express.Router();

//Get all projects
router.get("/", getAllProjects);

//Get a single projects
router.get("/:id", getSingleProject);

//Post a new project
router.post("/", postProject);

//Delete a project
router.delete("/:id", deleteProject);

//Update a project
router.patch("/:id", updateProject);

module.exports = router;
