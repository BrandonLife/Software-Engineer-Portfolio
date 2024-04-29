const config = require("../config/config");
const models = require("../models/Project");
const Utilities = require("../utilities");

module.exports = {
	get: (req, res, next) => {
		models.Project.find()
			.then((projects) => {
				return res.send(projects);
			})
			.catch(next);
	},
	specificProject: (req, res, next) => {
		const id = req.params.id;
		models.Project.findOne({ _id: id })
			.then((project) => res.send(project))
			.catch(next);
	},
	post: {
		createProject: (req, res, next) => {
			const { Title, imageUrl, Summary, Link, dateMade } = req.body;

			models.Project.create({ Title, imageUrl, Summary, Link, dateMade })
				.then((createdProject) => res.send(createdProject))
				.catch(next);
		},
	},

	put: (req, res, next) => {
		const id = req.params.id;
		const { Title, imageUrl, Summary, Link, dateMade } = req.body;
		console.log(req, "req object for Project");
		models.Project.updateOne({
			_id: id,
			title: Title,
			imageURL: imageUrl,
			summary: Summary,
			Link: Link,
			Date: dateMade,
		})
			.then((updatedProject) => res.send(updatedProject))
			.catch(next);
	},

	delete: (req, res, next) => {
		let id = req.params.id;
		console.log(req);
		models.Project.deleteOne({ _id: id })
			.then((removedProject) => res.send(removedProject))
			.catch(next);
	},
};
