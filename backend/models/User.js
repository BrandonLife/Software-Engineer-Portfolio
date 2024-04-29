const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	FirstName: {
		type: String,
		required: true,
	},
	LastName: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
	},
	Username: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
		minLength: 4,
	},
	DateMade: {
		type: String,
	},
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Project",
		},
	],
});
userSchema.methods = {
	matchPassword: function (password) {
		return bcrypt.compare(password, this.password);
	},
};
let saltRounds = 10;
userSchema.pre("save", function (next) {
	if (this.isModified("password")) {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) {
					next(err);
					return;
				}
				this.password = hash;
				next();
			});
		});
		return;
	}
	next();
});

module.exports = mongoose.model("User", userSchema);
