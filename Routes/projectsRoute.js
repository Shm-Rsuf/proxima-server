const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

//router
const router = express.Router();

router.use(requireAuth);

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
