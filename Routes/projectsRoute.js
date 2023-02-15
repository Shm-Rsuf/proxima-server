const express = require("express");
const { postProject } = require("../controllers/projectController");

//router
const router = express.Router();

//Get all projects
router.get("/", (req, res) => {
  console.log(res.json({ message: "Get all projects" }));
});

//Get a single projects
router.get("/:id", (req, res) => {
  console.log(res.json({ message: "Get a single project" }));
});

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
