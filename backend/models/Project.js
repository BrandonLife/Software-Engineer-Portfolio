const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	Title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	Summary: {
		type: String,
		required: true,
	},
	Link: {
		type: String,
		required: true,
	},
	creatorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	DateMade: {
		type: String,
	},
});

module.exports = mongoose.model("Project", projectSchema);
