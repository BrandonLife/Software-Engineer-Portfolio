const env = process.env.NODE_ENV || "development";
const config = {
	development: {
		port: process.env.PORT || 9999,
		dbURL: "mongodb+srv://admin:admin@cluster0.lnsjbur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
		authCookieName: "x-auth-token",
	},
	production: {},
};

module.exports = config[env];
