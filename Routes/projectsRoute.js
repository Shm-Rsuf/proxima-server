const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
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
router.delete("/:id", (req, res) => {
  console.log(res.json({ message: "Delete a project" }));
});

//Update a project
router.patch("/:id", (req, res) => {
  console.log(res.json({ message: "Patch a project" }));
});

module.exports = router;
