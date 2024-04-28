const env = process.env.NODE_ENV || "development";
const config = {
	development: {
		port: process.env.PORT || 9999,
		dbURL: "mongodb://localhost:27017/My-Portfolio-2024",
		authCookieName: "x-auth-token",
	},
	production: {},
};

module.exports = config[env];
