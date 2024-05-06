const router = require("express").Router();
const {
	getProjects,
	saveProject,
	deleteProject,
	updateProject,
} = require("../controllers/ProjectControllers");

router.get("/get", getProjects);

router.post("/save", saveProject);

router.put("/updated/:id", updateProject);

router.delete("/delete/:id", deleteProject);

module.exports = router;
