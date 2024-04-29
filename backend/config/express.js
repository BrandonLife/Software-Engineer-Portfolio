const bodyParser = require("body-parser");
const cors = require("cors");
const secret = "secret";
const cookieParser = require("cookie-parser");

module.exports = (app) => {
	app.use(cors());

	app.use(
		bodyParser.urlencoded({
			extended: true,
		})
	);
	app.use(bodyParser.json());

	app.use(cookieParser(secret));
};
