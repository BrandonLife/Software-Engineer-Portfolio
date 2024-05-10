const router = require("express").Router();
const {
	getProjects,
	saveProject,
} = require("../controllers//productionControllers");

router.get("/get", getProjects);

router.post("/save", saveProject);


module.exports = router;
