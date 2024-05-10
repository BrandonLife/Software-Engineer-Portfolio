const router = require("express").Router();
const {
	getProjects,
	saveProject,
} = require("../controllers//productionControllers");
const {
    sendEmail
} = require("../controllers/EmailControllers")




router.get("/get", getProjects);

router.post("/save", saveProject);
router.post('/email/send', sendEmail)

module.exports = router;
