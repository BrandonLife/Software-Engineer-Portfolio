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

module.exports.deleteProject = (req, res) => {
	const { id } = req.params;
	ProjectModel.findByIdAndDelete(id)
		.then(() => res.send("Project deleted successfully"))
		.catch((err) => {
			console.log(err);
			res.send({
				error: err,
				msg: "Something went wrong, could not delete project",
			});
		});
};

module.exports.updateProject = (req, res) => {
	const { id } = req.params;
	const { project } = req.body;
	ProjectModel.findByIdAndUpdate(id, { project })
		.then(() => res.send(" Project updated Successfully"))
		.catch((err) => {
			console.log(err);
			res.send({
				error: err,
				msg: "Something went wrong, project not updated!",
			});
		});
};
