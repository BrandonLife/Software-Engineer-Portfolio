const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	phoneNumber: {
		type: String,
	},
    message: {
		type: String,
	},
});

module.exports = mongoose.model("Email", emailSchema);
