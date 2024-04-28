const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
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
	DateMade: {
		type: String,
	},
});

module.exports = mongoose.model("Card", cardSchema);
