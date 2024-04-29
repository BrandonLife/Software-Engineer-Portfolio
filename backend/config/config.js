const env = process.env.NODE_ENV || "development";
const config = {
	development: {
		port: process.env.PORT || 9000,
		dbURL: "mongodb+srv://admin:admin@cluster0.lnsjbur.mongodb.net/",
		authCookieName: "x-auth-token",
	},
	production: {},
};

module.exports = config[env];
