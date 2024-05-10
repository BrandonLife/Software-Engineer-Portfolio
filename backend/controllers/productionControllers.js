const ProjectModel = require("../models/Project");

module.exports.getProjects = async (req, res) => {
	const projects = await ProjectModel.find();
	res.send(projects);
};

module.exports.saveProject = (req, res) => {
	let newProject = req.body;
	ProjectModel.create(newProject)
		.then((data) => {
			console.log("Project saved Successfully");
			res.status(201).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "Something went wrong!" });
		});
};