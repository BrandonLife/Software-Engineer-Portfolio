const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	summary: {
		type: String,
	},
	imageUrl: {
		type: String,
	},
	linkAddress: {
		type: String,
	},
});

module.exports = mongoose.model("Project", projectSchema);
