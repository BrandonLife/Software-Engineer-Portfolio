const bodyParser = require("body-parser");
const cors = require("cors");
const secret = "secret";
const cookieParser = require("cookie-parser");

module.exports = (app) => {
	app.use(cors({ origin: true }));
	// https://stackoverflow.com/questions/46337471/how-to-allow-cors-in-react-js

	app.use(
		bodyParser.urlencoded({
			extended: false,
		})
	);
	app.use(bodyParser.json());

	app.use(cookieParser(secret));
};
